import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Category from './Category';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/categories" render={(props) => <Category {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
