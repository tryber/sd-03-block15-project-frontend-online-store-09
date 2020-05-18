import React from 'react';
import './DetailsProduct.css';
import ShoppingCartButton from '../Cart_Components/Shopping_Cart_Components/ShoppingCartButton';
import addToCart from '../../services/addToCard';

class DetailsProduct extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart1 = this.addToCart1.bind(this);
  }

  addToCart1() {
    const { location: { state: { value: { product } } } } = this.props;
    addToCart(product);
  }

  render() {
    const { location: { state: { value: { product: { title, price, thumbnail } } } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <div style={{ float: 'right', clear: 'both', marginBottom: '10px' }}>
          <ShoppingCartButton />
        </div>
        <div className="box-product">
          <h3>{title}</h3>
          <img className="product-image" src={thumbnail} alt={title} width="50%" />
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
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={this.addToCart1}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default DetailsProduct;
