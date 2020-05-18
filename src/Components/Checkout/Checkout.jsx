/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.showMessage = this.showMessage.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  showMessage() {
    // eslint-disable-next-line no-alert
    alert('Obrigado pela compra!');
  }

  render() {
    return (
      <form className="form">
        <div className="text-box">
          <h3>DIGITE SEUS DADOS PARA REALIZAR A COMPRA</h3>
          <input
            placeholder="Nome Completo"
            className="input"
            data-testid="checkout-fullname"
            type="text"
            name="name"
            onChange={this.handleChangeInput}
          />
          <input
            className="input"
            placeholder="Email"
            data-testid="checkout-email"
            type="email"
          />
          <input
            className="input"
            placeholder="CPF"
            data-testid="checkout-cpf"
            type="text"
          />
          <input
            className="input"
            placeholder="Telefone"
            data-testid="checkout-phone"
            type="text"
          />
          <input
            className="input"
            placeholder="CEP"
            data-testid="checkout-cep"
            type="text"
          />
          <input
            className="input"
            placeholder="Endereço"
            data-testid="checkout-address"
            type="text"
          />
          <input className="input" placeholder="Complemento" type="text" />
          <Link to="/">
            <button
              className="button"
              type="submit"
              onClick={() => this.showMessage()}
            >
              Finalizar
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

export default Checkout;
