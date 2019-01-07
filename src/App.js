import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './scss/global.scss';
import './scss/common.scss';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './container/Dashboard';
import SignupForm from './component/SignupForm';

class App extends Component {
  render() {
      return ( 
      <Router>
          <Switch>
              <Route exact path = "/dashboard" component = {Dashboard} />
              <Route exact path = "/signupform" component = {SignupForm} />
          </Switch> 
      </Router>
      );
  }
}

export default App;
