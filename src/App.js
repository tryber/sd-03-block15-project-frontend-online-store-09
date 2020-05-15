import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './Components/MainPage';
import ShoppingCart from './Components/ShoppingCart';
import Category from './Components/Category';
import DetailsProduct from './Components/DetailsProduct'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/DetailsProduct" component={DetailsProduct} />
        <Category />
      </Switch>
    </Router>
  );
}

export default App;
