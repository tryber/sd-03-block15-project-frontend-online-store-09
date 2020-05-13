import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.svg';

class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: false };
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    console.log(this.state.page);
    this.setState({ page: !this.state.page });
  }
  render() {
    return (
      <div data-testid="shopping-cart-button" >
        <Link onClick={this.changeState} to="/shopping-cart">
          <img src={icon} alt="Shopping cart icon" width="50px" />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
