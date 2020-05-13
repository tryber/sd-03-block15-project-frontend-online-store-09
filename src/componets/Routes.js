import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Home from './Home';

class Routes extends React.Component {
  render (){
    return (
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route path="/shopping-cart" render={() => <ShoppingCart />} />
      </Switch>
    );
  }
}

export default Routes;
