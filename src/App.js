import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './componets/MainPage';
import ShoppingCart from './componets/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path='/shopping-cart' component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
