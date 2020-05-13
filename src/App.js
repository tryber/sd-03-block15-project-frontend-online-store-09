import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCartButton from './componets/ShoppingCartButton';
import Routes from './componets/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <div className="App">
        <ShoppingCartButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
