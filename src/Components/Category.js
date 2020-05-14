import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Product from './Product';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], products: [], boolToShow: false };
    this.listCategory = this.listCategory.bind(this);
    this.listProducts = this.listProducts.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }
  listProducts(event) {
    const categorieId = event.target.id;
    console.log(categorieId);
    api.getProductsFromCategoryAndQuery(categorieId)
    .then(data => {
      this.setState({ products: data.results, boolToShow: true})
    });
  }

  listCategory() {
    const categories = this.state.categories;

    return categories.map(({ id, name }) => (
      <div key={id}>
        <Link onClick={this.listProducts}
          id={id}
          data-testid="category"
          to={`/categories/${id}`}
          name="categories"
        >
          {name}
        </Link>
      </div>
    ));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Link to="/categories">Categorias</Link>
        {this.listCategory()}
        {this.state.boolToShow &&
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 10px 5px 10px',
            border: '1px solid black',
            flexWrap: 'wrap',
            margin: '5px',
          }}>
            {products.map((product) =>
            <Product key={product.id} product={product} />)}
          </div>
        }
      </div>
    );
  }
}

export default Category;
