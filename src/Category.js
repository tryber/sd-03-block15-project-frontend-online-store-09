import React from 'react';
import { Link } from 'react-router-dom';
import * as api from './services/api';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
    };
    this.listCategory = this.listCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
        loading: false,
      });
    });
  }

  listCategory() {
    const categories = this.state.categories;

    return categories.map(({ id, name }) => (
      <div key={id}>
        <Link
          data-testid="category"
          to={`/categories/${id}`}
          id={id}
          name="categories"
        >
          {name}
        </Link>
      </div>
    ))
  };

  render() {
    const { loading } = this.state;
    if (loading) return <p>loading</p>;
    return (
      <div >
        <Link to="/shoppingCart">Categorias</Link>
        {this.listCategory()}
      </div>
    );
  }
}

export default Category;
