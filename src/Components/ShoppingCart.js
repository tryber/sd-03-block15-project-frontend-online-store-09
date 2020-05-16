import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
    this.shoppingCartProducts = this.shoppingCartProducts.bind(this);
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
    this.shoppingCartProducts = this.shoppingCartProducts.bind(this);
  }

  shoppingCartProducts() {
    const { products } = this.state;
    return products.map(({ title, price, thumbnail, id }) => (
      <li data-testid="shopping-cart-product-name" key={id}>
        <h1>{title}</h1>
        <img alt={`Imagem de um ${title}`} src={thumbnail}/>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </li>
    ))
  }
  render() {
    return (
      <ul>
        {this.shoppingCartProducts()}
      </ul>
    );
  }
}

export default ShoppingCart;
