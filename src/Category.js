import React from 'react';
import { Link } from 'react-router-dom';
import *as api from './services/api';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
      xablau: false,
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

  listCategory = () => {
    const categories = this.state.categories;

    return categories.map(({ id, name }) => (
      <div key={id} data-testid="category">
        <Link
          to={`/categories/${id}`}
          id={id}
          name="categories">
        {name}
        </Link>
      </div>
    ));
  };

  render() {
    const { loading } = this.state;
    if (loading) return <p>loading</p>;
    return (
      <div data-testid="category">
        <Link
          to="/shoppingCart"
          data-testid="shopping-cart-button"
          onClick={() => this.setState({
            xablau: !this.state.xablau,
          })}>
          Categorias
        </Link>
        {this.state.xablau && this.listCategory()}
      </div>
    );
  }
}

export default Category;
