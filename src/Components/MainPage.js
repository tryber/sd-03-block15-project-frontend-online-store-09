import React, { Component } from 'react';
import SearchComponent from '../Components/SearchComponent';
import '../Components/MainPage.css';

export class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="div-MainPage">
          <SearchComponent />
        </div>
      </div>
    );
  }
}

export default MainPage;
