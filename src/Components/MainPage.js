import React, { Component } from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import Category from './Category'
import SearchComponent from '../Components/SearchComponent';
import '../Components/MainPage.css'

export class MainPage extends Component {
  render() {
    return (
      <div>
        <header className='div-MainPage'>
          <SearchComponent />
          <ShoppingCartButton />
        </header>
        <aside className="aside-MainPage">
          <Category />
        </aside>
      </div>
    );
  }
}

export default MainPage;
