import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './Components/MainPage';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
