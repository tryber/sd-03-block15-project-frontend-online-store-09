import React, { Component } from 'react';
// eslint-disable-next-line import/no-named-as-default
import SearchBox from './SearchBox';
import Category from '../Category/Category';
import '../MainPage/MainPage.css';
// eslint-disable-next-line import/no-named-as-default
import ProductList from '../Product_Components/ProductList';
import * as Api from '../../services/api';
import ShoppingCartButton from '../Cart_Components/Shopping_Cart_Components/ShoppingCartButton';
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
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
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

  handleChangeText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  handleChangeCategory(event) {
    const { value } = event.target;
    this.setState({ selectedCategory: value });
    setTimeout(() => this.searchProducts(), 500);
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
            handleChange={this.handleChangeText}
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
              onChangeCategory={this.handleChangeCategory}
            />
          </nav>
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

export default SearchComponent;
