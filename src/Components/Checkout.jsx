import React from 'react';
import Finish from './Finish';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      ok: false,
    }
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target;

    this.setState((state) => ({
      [name]: value,
      formErros: {
        ...state.formErros,
        [name]: this.validateField(name, value),
      },
    }));
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'name':
        return value === String ? '' : 'Nome Inválido';
      case 'email':
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return emailValid ? '' : 'Email Inválido';
      case 'cpf':
        return value !== Number ? '' : 'CPF Inválido';
      case 'endereco':
        const enderecoValid = value.replace(/[^a-zA-Z0-9]/g, '');
        return enderecoValid ? '' : 'Endereço Inválido';
      default:
        return '';
    }
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
              maxLength="40"
              name="name"
              onChange={this.handleChangeInput}
              required
              style={{ textTransform: "uppercase" }}
              value={this.state.name}
            />
          </div>
          <div className="text-box">
            <span>Email&nbsp;</span>
            <input
              data-testid="checkout-email"
              type="email"
              maxLength="50"
              name="email"
              onChange={this.handleChangeInput}
              required
              value={this.state.email}
            />
          </div>
          <div className="text-box">
            <span >CPF&nbsp;</span>
            <input
              data-testid="checkout-cpf"
              type="cpf"
              maxLength="11"
              name="cpf"
              onChange={this.handleChangeInput}
              required
              value={this.state.cpf}
            />
          </div>    <div className="text-box">
            <span  >Telefone&nbsp;</span>
            <input
              data-testid="checkout-phone"
              type="telefone"
              maxLength="11"
              name="telefone"
              onChange={this.handleChangeInput}
              required
              value={this.state.cpf}
            />
          </div>
          <div className="text-box">
            <span >CEP&nbsp;</span>
            <input
              data-testid="checkout-cep"
              type="cep"
              maxLength="11"
              name="cep"
              onChange={this.handleChangeInput}
              required
              value={this.state.cep}
            />
          </div>
          <div className="text-box">
            <span >ENDEREÇO&nbsp;</span>
            <input
              data-testid="checkout-address"
              maxLength="200"
              name="endereco"
              onChange={this.handleChangeInput}
              required
              type="endereco"
              value={this.state.endereco}
            />
            <span>&nbsp;Nº &nbsp;</span>
            <input
              maxLength="5"
              required
            />
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
