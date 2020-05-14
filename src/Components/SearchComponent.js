import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import Category from './Category';
import './MainPage.css';
import ProductList from './ProductList';
import * as Api from '../services/api';

class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: '',
      searchText: '',
      searchCategory: '',
      products: [],
      category: [],
    };
    this.searchProducts = this.searchProducts.bind(this);
    this.listProducts = this.listProducts.bind(this);
  }

  searchProducts() {
    const { searchText, selectedCategory } = this.state;
    Api.getProductsFromCategoryAndQuery(
      selectedCategory,
      searchText,
    ).then((products) => this.setState({ products }));
  }

  listProducts(event) {
    const categorieId = event.target.name;
    const searchCategory = this.state;
    Api.getProductsFromCategoryAndQuery(categorieId, searchCategory)
    .then(category => {
      this.setState({ category });
      console.log(categorieId);
    });
  }
  componentDidMount() {
    Api.getCategories()
    .then((category) => this.setState({ category }));
  }

  render() {
    const { searchText, products, category } = this.state;
    return (
      <div>
        <aside className="aside-MainPage">
          <Category onChange={this.listProducts} categories={category}/>
        </aside>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBox
          handleClick={() => this.searchProducts}
          searchText={searchText}
          handleChange={(event) => this.setState({ searchText: event.target.value })}
        />
        <ProductList products={products} />
      </div>
    );
  }
}

export default SearchComponent;
