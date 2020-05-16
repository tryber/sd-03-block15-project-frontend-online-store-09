import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }
  componentDidMount() {
    const products = localStorage;
    const listProducts = [];
    for (let i = 0; i < products.length; i += 1) {
      let key = products.key(i);
      let jsonProduct = window.localStorage.getItem(key);
      listProducts.push(JSON.parse(jsonProduct));
    }
    this.setState({products: listProducts});
  }
  render() {
    const {products} = this.state;
    const {quantity} = this.props;
    return (
      <div>
        {products.map(({ title, price, thumbnail }) => (
          <div key={title}>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <img alt={title} src={thumbnail}/>
            <p>{price}</p>
            <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
