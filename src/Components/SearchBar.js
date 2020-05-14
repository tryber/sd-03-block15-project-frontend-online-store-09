import React, { Component } from "react";
import "./SearchBar.css";
import * as Api from "../services/api";
import Product from "./Product";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      searchText: "",
      products: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  handleClick() {
    const { searchText, selectedCategory } = this.state;
    Api.getProductsFromCategoryAndQuery(selectedCategory, searchText).then(
      (products) => {
        this.setState({ products });
      }
    );
  }

  render() {
    const { products } = this.state;
    if (products.results) {
      if (products.results.length === 0)
        return <p>Nenhum Produto foi encontrado</p>;
      return (
        <div>
          <input
            data-testid="query-input"
            className="c"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={this.handleClick}
          >
            Search
          </button>
          <div>
            {products.results.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <section>
          <div className="a">
            <p className="b" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <input
              data-testid="query-input"
              className="c"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={this.handleClick}
            >
              Search
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchBar;
