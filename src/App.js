import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        {/* <Route path='/cart' component={CartButton} /> */}
      </Switch>
    </Router>
  );
}

export default App;
