import React, { Component } from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import SearchComponent from '../Components/SearchComponent';
import '../Components/MainPage.css';

export class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="div-MainPage">
          <SearchComponent />
          <ShoppingCartButton />
        </div>
      </div>
    );
  }
}

export default MainPage;
