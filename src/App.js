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
        <Route exact path="/" component={MainPage} />
        <Route path="/DetailsProduct" component={DetailsProduct} />
        <Route exact path="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
