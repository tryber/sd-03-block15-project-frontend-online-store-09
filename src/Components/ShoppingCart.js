import React from 'react';
import * as Api from '../services/api';

class ShoppingCart extends React.Component {
  componentDidMount() {
    const categoryId = '';
    const ids = Object.values(localStorage);
    ids.map(id => Api.getProductsFromCategoryAndQuery(id, categoryId)
    .then((products => console.log(products)))
    );
  }
  render() {
    return (
      <div>
        <p>Work in pro</p>
      </div>
    );
  }
}

export default ShoppingCart;
