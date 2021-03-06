import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import Landing from './container/Landing';
import UserProfile from './container/UserProfile';
import SuccessMessage from './container/SuccessMessage';
import SignupForm from './component/SignupForm';
import Login from './component/Login/Login';
import ContactUs from './container/ContactUs'
import UserProfiles from './component/UserProfiles'


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
              <Route exact path = "/SuccessMessage" component = {SuccessMessage} />
              <Route exact path = "/ContactUs" component = {ContactUs} />
              <Route exact path = "/UserProfile" component = {ContactUs} />
              <Route exact path = "/UserProfiles" component = {UserProfiles} />
          </Switch> 
      </Router>
      );
  }
}

export default App;
