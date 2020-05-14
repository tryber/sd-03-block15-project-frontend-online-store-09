import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import ProductList from './ProductList';
import * as Api from '../services/api';

class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: '',
      searchText: '',
      products: [],
    };
    this.searchProducts = this.searchProducts.bind(this);
  }

  searchProducts() {
    const { searchText, selectedCategory } = this.state;
    Api.getProductsFromCategoryAndQuery(
      selectedCategory,
      searchText,
    ).then((products) => this.setState({ products }));
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBox
          handleClick={() => this.searchProducts}
          searchText={searchText}
          handleChange={(e) => this.setState({ searchText: e.target.value })}
        />
        <ProductList products={products} />
      </div>
    );
  }
}

export default SearchComponent;
