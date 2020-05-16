import React from 'react';
import './DetailsProduct.css';
// import { Link } from 'react-router-dom';

class DetailsProduct extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.location.state.value;
    return (
      <div data-testid="product-detail-name">
        <div className="box-product">
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} width="50%" />
          <h2>Detalhes</h2>
          <ul>
            <li>{title}</li>
            <li>{`Preço: R$ ${price.toFixed(2)}`}</li>
          </ul>
        <div style={{margin: "10px"  }}>
          <textarea
            placeholder="Digite sua avaliação"
            data-testid="product-detail-evaluation"
            rows="10"
            cols="48"
          />
        </div>
        </div>
      </div>
    );
  }
}
export default DetailsProduct;
