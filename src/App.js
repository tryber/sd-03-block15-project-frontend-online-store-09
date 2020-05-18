import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// eslint-disable-next-line import/no-named-as-default
import MainPage from './Components/MainPage/MainPage';
import ShoppingCart from './Components/Cart_Components/Shopping_Cart_Components/ShoppingCart';
import DetailsProduct from './Components/Details/DetailsProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/DetailsProduct" component={DetailsProduct} />
      </Switch>
    </Router>
  );
}

export default App;
