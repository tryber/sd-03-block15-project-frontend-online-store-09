import React from 'react';
import './DetailsProduct.css';
import ShoppingCartButton from './ShoppingCartButton';
import * as func from './addToCard';
class DetailsProduct extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart1 = this.addToCart1.bind(this);
  }
  addToCart1() {
    const { product } = this.props.location.state.value;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    func.addToCart(product, cartItems);
    // if (cartItems === null) {
    //   product.quantity = 1;
    //   return localStorage.setItem('cartItems', JSON.stringify([{ ...product }]));
    // }
    // const itemRepetido = cartItems.find((item) => item.id === product.id);
    // if (itemRepetido) {
    //   const indexOfItemInCart = cartItems.indexOf(itemRepetido);
    //   cartItems[indexOfItemInCart].quantity += 1;
    //   return localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // }
    // product.quantity = 1;
    // return localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
  }
  render() {
    const { product: { title, price, thumbnail } } = this.props.location.state.value;
    return (
      <div data-testid="product-detail-name">
        <div style={{ float: 'right', clear: 'both', marginBottom: '10px' }}>
          <ShoppingCartButton />
        </div>
        <div className="box-product">
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} width="50%" />
          <h2>Detalhes</h2>
          <ul>
            <li>{title}</li>
            <li>{`Preço: R$ ${price.toFixed(2)}`}</li>
          </ul>
          <div style={{ margin: '10px' }}>
            <textarea
              placeholder="Digite sua avaliação"
              data-testid="product-detail-evaluation"
              rows="10"
              cols="48"
            />
          </div>
          <button data-testid="product-detail-add-to-cart" onClick={this.addToCart1}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}
export default DetailsProduct;
