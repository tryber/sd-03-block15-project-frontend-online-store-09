import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import Category from './Category';
import './MainPage.css';
import ProductList from './ProductList';
import * as Api from '../services/api';
import ListDetails from './LIstDetails';

class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      selectedCategory: '',
      searchText: '',
      products: [],
    };
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((category) => {
      this.setState({ category });
    });
  }

  searchProducts() {
    const { searchText, selectedCategory } = this.state;
    Api.getProductsFromCategoryAndQuery(
      selectedCategory,
      searchText,
    ).then((products) => this.setState({ products }));
  }

  render() {
    const { searchText, products, category, selectedCategory } = this.state;
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div>
            <Category
              selectedCategory={selectedCategory}
              categories={category}
              onChangeCategory={(e) => {
                this.setState({ selectedCategory: e.target.value });
                setTimeout(() => this.searchProducts(), 500);
              }}
            />
          </div>
          <div>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <SearchBox
              handleClick={() => this.searchProducts}
              searchText={searchText}
              handleChange={(event) =>
                this.setState({ searchText: event.target.value })
              }
            />
            <ProductList products={products} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
