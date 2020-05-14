import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Category from './Components/Category';
import MainPage from './Components/MainPage';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route exact to="/categories/:id" component={Category} />
        <Route exact to="/categories" render={(props) => <Category {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
