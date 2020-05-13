import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import MainPage from './components/MainPage'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route to="/categories" render={(props) => <Category {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
