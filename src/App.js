import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import Landing from './container/Landing';
import UserProfile from './container/UserProfile';
import SignupForm from './component/SignupForm';
import Login from './component/Login/Login';

import './semantic/common.scss';
import './semantic/semantic_main.scss';


class App extends Component {
  render() {
      return ( 
      <Router>
          <Switch>
              <Route exact path = "/dashboard" component = {Dashboard} />
              <Route exact path = "/profile" component = {UserProfile} />
              <Route exact path = "/signupform" component = {SignupForm} />
              <Route exact path = "/login" component = {Login} />
              <Route exact path = "/" component = {Landing} />
          </Switch> 
      </Router>
      );
  }
}

export default App;
