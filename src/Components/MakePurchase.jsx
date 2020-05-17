import React from 'react';
import Checkout from './Checkout';
import './Checkout.css';


class MakePurchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finish: false,
      frase: ['Realizar compra', 'Deixar para Depois'],
    };
  }

  finish() {
    this.setState({ finish: !this.state.finish });
  }
  render() {
    return (
      <div>
        <button
          className="button"
          data-testid="checkout-products"
          onClick={() => this.finish()}
        >
          {this.state.finish ? this.state.frase[1] : this.state.frase[0]}
        </button>
        {this.state.finish && <Checkout />}
      </div>
    );
  }
}

export default MakePurchase;
