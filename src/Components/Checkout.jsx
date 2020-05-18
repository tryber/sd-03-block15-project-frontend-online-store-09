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
            />
            <span>Email&nbsp;</span>
            <input data-testid="checkout-email" type="email" />
            <span>CPF&nbsp;</span>
            <input data-testid="checkout-cpf" type="cpf" />
            <span>Telefone&nbsp;</span>
            <input data-testid="checkout-phone" type="telefone" />
            <span>CEP&nbsp;</span>
            <input data-testid="checkout-cep" type="cep" />
            <span>ENDEREÇO&nbsp;</span>
            <input data-testid="checkout-address" name="endereco" />
            <Link to="/">
              <button className="button" type="submit" onClick={() => this.showMessage()}>
                Finalizar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
