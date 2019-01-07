import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import UserProfile from './container/UserProfile';

import './semantic/common.scss';
import './semantic/semantic_main.scss';

class App extends Component {
  render() {
      return ( 
      <Router>
          <Switch>
              <Route exact path = "/dashboard" component = {Dashboard} />
              <Route exact path = "/profile" component = {UserProfile} />
          </Switch> 
      </Router>
      );
  }
}

export default App;
