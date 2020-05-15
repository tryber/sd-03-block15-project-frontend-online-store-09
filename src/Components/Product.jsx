import React, { Component } from 'react';
import ListDetails from './LIstDetails';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'

export class Product extends Component {
constructor(props) {
  super(props)

  this.state = {
     ids: [],
  }
}

  console() {
    return console.log(this.props.title)
  }


  render() {
    const { product: { title, price, thumbnail, id } } = this.props;
    console.log(id)
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
          {/* <Link>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default Product;
