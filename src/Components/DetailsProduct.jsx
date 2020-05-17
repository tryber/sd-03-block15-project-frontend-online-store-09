import React from 'react';
import './DetailsProduct.css';
import ShoppingCartButton from '../Components/ShoppingCartButton';

class DetailsProduct extends React.Component {
  addToCart() {
    const { product } = this.props.location.state.value;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems === null) {
      product.quantity = 1;
      return localStorage.setItem('cartItems', JSON.stringify([{ ...product }]));
    }
    const itemRepetido = cartItems.find((item) => item.id === product.id);
    if (itemRepetido) {
      const indexOfItemInCart = cartItems.indexOf(itemRepetido);
      cartItems[indexOfItemInCart].quantity += 1;
      return localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    product.quantity = 1;
    return localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
  }
  render() {
    const { product: {title, price, thumbnail} } = this.props.location.state.value;
    return (
      <div data-testid="product-detail-name">
        <ShoppingCartButton />
        <div className="box-product">
          <h2>Produto</h2>
          <img src={thumbnail} alt={title} />
          <h3>{title}</h3>
          <h2>Detalhes</h2>
          <ul>
            <li>{title}</li>
            <li>{`Preço: R$ ${price.toFixed(2)}`}</li>
          </ul>
          <textarea
            placeholder="Digite sua avaliação"
            data-testid="product-detail-evaluation"
          />
          <button
            data-testid="product-detail-add-to-cart"
            onClick={this.addToCart.bind(this)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}
export default DetailsProduct;
