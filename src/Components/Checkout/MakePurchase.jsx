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
    const { finish } = this.state;
    this.setState({ finish: !finish });
  }

  render() {
    const { finish, frase } = this.state;
    return (
      <div>
        <div className="display-form">
          <button
            type="button"
            className="buttonFinish"
            data-testid="checkout-products"
            onClick={() => this.finish()}
          >
            {finish ? frase[1] : frase[0]}
          </button>
        </div>
        <div>
          {finish && <Checkout />}
        </div>
      </div>
    );
  }
}

export default MakePurchase;
