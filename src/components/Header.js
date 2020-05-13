import React, { Component } from 'react'
import Category from './Category'

 class Header extends Component {
   constructor(props) {
  super(props);

  this.state = { search: '' };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  const { value } = event.target;
  this.setState({ search: value });
}

  render() {
    return (
      <header>
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input value={this.state.search} onChange={this.handleChange} />
      </div>
      <div>
        <Category />
      </div>
    </header>
    )
  }
}


export default Header;
