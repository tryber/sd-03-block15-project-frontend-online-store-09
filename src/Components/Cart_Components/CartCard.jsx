import React, { Component } from 'react';
import '../Product_Components/ProductList.css';

class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      stock: this.props.product.available_quantity,
    };

    this.subQuantity = this.subQuantity.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
  }

  addQuantity() {
    const { stock, quantity } = this.state;
    if (quantity < stock) {
      return this.setState((state) => ({ quantity: state.quantity + 1 }));
    }
  }


  subQuantity() {
    const { quantity } = this.state;
    return quantity >= 1 ? this.setState((state) => ({ quantity: state.quantity - 1 }))
      : this.setState({ quantity: 0 });
  }

  render() {
    const { product: { title, thumbnail, price } } = this.props;
    const { quantity } = this.state;
    return (
      <div className="cartProduct">
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${quantity}`}</p>
        <p>{`Preço: R$ ${(price * quantity).toFixed(2)}`}</p>
        <div data-testid="product-detail-add-to-cart">
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={this.addQuantity}
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={this.subQuantity}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default CartCard;
