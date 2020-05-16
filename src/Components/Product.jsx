import React, { Component } from "react";
import ListDetails from "./LIstDetails";
// import {Link} from 'react-router-dom'

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
    };
  }
  addToLocalStorage(title, price, thumbnail, id) {
    const storageJson = JSON.stringify({ title, price, thumbnail });
    localStorage.setItem(`${id}`, storageJson);
  }
  render() {
    const {
      product: { title, price, thumbnail, id },
    } = this.props;
    return (
      <div className="product">
        <div style={{ width: "18rem" }} data-testid="product">
          <img src={thumbnail} alt={`${title} thumbnail`} />
          <h5>{title}</h5>
          <h3>
            R$
            {price}
          </h3>
          <div>
            <ListDetails
              value={{
                title,
                price,
                thumbnail,
              }}
            />
            <button
              data-testid="product-add-to-cart"
              onClick={() =>
                this.addToLocalStorage(title, price, thumbnail, id)
              }
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
