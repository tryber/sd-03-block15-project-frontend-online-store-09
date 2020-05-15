import React, { Component } from 'react';
import ListDetails from './LIstDetails';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
    }
  }
  addToLocalStorage(id, title) {
    localStorage.setItem(`${id}`, title)
  }
  render() {
    const { product: { title, price, thumbnail, id } } = this.props;
    return (
      <div className="product">
        <div style={{ width: '18rem' }} data-testid="product">
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
          />
          <div>
            <h5>{title}</h5>
            <p>
              R$
              {price}
            </p>
            <ListDetails
              value={{
                title,
                price,
                thumbnail,
              }}
            />
          </div>
          <button onClick={() => this.addToLocalStorage(id, title)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
