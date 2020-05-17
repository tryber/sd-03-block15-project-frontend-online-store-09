import React from 'react';
import Finish from './Finish';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ok: false,
    };
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
    return this.setState({ ok: !this.state.ok });
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
              onChange={this.handleChangeInput}
              required
            />
            <span>Email&nbsp;</span>
            <input data-testid="checkout-email" type="email" />
            <span >CPF&nbsp;</span>
            <input data-testid="checkout-cpf" type="cpf" />
            <span>Telefone&nbsp;</span>
            <input data-testid="checkout-phone" type="telefone" />
            <span >CEP&nbsp;</span>
            <input data-testid="checkout-cep" type="cep" />
            <span >ENDEREÇO&nbsp;</span>
            <input data-testid="checkout-address" name="endereco" />
            <button className="button" onClick={() => this.checkout()}>
              Finalizar
            </button>
            {this.state.ok && <Finish />}
          </div>
        </form>
      </div >
    );
  }
}

export default Checkout;
