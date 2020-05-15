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
    const { products } = this.state;
    if(products.length === 0) return <p>Seu carrinho está vazio</p>;
    return (
      <div>
        {products.map(({ title, price, thumbnail }) => (
          <div key={title}>
            <h1 data-testid="shopping-cart-product-name">{title}</h1>
            <img alt="" src={thumbnail}/>
            <p>{price}</p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
