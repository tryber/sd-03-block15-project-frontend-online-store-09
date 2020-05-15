import React from 'react';
import './DetailsProduct.css';

class test extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.location.state.value;

    return (
      <div data-testid="product-detail-name">
        <div className="box-product">
          <h2>Produto</h2>
          <img src={thumbnail} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="details">
          <h2>Detalhes</h2>
          <ul>
            <li>{title}</li>
            <li>{price}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default test;
