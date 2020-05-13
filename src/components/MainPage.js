import React, { Component } from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import Header from './Header';

export class MainPage extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 10px 5px 10px',
          border: '1px solid black',
          margin: '5px',
        }}
      >
        <Header />
        <ShoppingCartButton />
      </div>
    );
  }
}

export default MainPage;
