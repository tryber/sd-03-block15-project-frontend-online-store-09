import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Category from './Category';
import './MainPage.css';
import ProductList from './ProductList';
import * as Api from '../services/api';
import ShoppingCartButton from './ShoppingCartButton';
import './SearchComponent.css';

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
  renderHeader() {
    const { searchText } = this.state;
    return (
      <header className="sc-header">
        <div className="sc-header-div">
          <p style={{}} data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <SearchBox
            handleClick={() => this.searchProducts}
            searchText={searchText}
            handleChange={(event) =>
              this.setState({ searchText: event.target.value })
            }
          />
        </div>
        <ShoppingCartButton />
      </header>
    );
  }
  render() {
    const { products, category, selectedCategory } = this.state;
    return (
      <div>
        {this.renderHeader()}
        <div>
          <nav className="sc-nav">
            <Category
              selectedCategory={selectedCategory}
              categories={category}
              onChangeCategory={(e) => {
                this.setState({ selectedCategory: e.target.value });
                setTimeout(() => this.searchProducts(), 500);
              }}
            />
          </nav>
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

export default SearchComponent;
