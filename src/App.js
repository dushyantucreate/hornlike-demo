import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './scss/global.scss';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './container/Dashboard';

class App extends Component {
  render() {
      return ( 
      <Router>
          <Switch>
              <Route exact path = "/dashboard" component = {Dashboard} />
          </Switch> 
      </Router>
      );
  }
}

export default App;
