import React, { Component } from "react";
import ShoppingCartButton from "./ShoppingCartButton";

export class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 10px 5px 10px",
          border: "1px solid black",
          margin: "5px 5px 5px 5px"
        }}
      >
        <header>
          <div>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <input value={this.state.search} onChange={this.handleChange} />
          </div>
        </header>
        <ShoppingCartButton />
      </div>
    );
  }
}

export default MainPage;
