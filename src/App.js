import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './Components/MainPage';
import ShoppingCart from './Components/ShoppingCart';
import DetailsProduct from './Components/DetailsProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/DetailsProduct" component={DetailsProduct} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
