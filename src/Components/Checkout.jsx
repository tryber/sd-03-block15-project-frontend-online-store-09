import React from 'react';
import Finish from './Finish';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ok: false,
    }
    this.checkout = this.checkout.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  checkout() {
    if (!this.state.name.length) {
      return null;
    }
    return this.setState({ ok: !this.state.ok })
  }

  render() {
    return (
      <div className="form">
        <form>
          <h3>DIGITE SEUS DADOS PARA REALIZAR A COMPRA</h3>
          <div className="text-box">
            <span>Nome completo&nbsp;</span>
            <input
              data-testid="checkout-fullname"
              type="text"
              name="name"
              onClick={() => this.handleChangeInput()}
              required
              value={this.state.name}
            />
          </div>
          <div className="text-box">
            <span>Email&nbsp;</span>
            <input data-testid="checkout-email" type="email" />
          </div>
          <div className="text-box">
            <span >CPF&nbsp;</span>
            <input data-testid="checkout-cpf" type="cpf" />
          </div>
          <div className="text-box">
            <span>Telefone&nbsp;</span>
            <input data-testid="checkout-phone" type="telefone" />
          </div>
          <div className="text-box">
            <span >CEP&nbsp;</span>
            <input data-testid="checkout-cep" type="cep" />
          </div>
          <div className="text-box">
            <span >ENDEREÇO&nbsp;</span>
            <input data-testid="checkout-address" name="endereco" />
            <button
              className="button"
              onClick={() => this.checkout()}
            >
              Finalizar
          </button>
          </div>
          {this.state.ok && <Finish />}
        </form>
      </div>
    );
  }
}

export default Checkout;
