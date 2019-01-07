import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import TopHeader from '../../component/TopHeader/TopHeader';

class Dashboard extends Component {
  render() {
      return ( 
          <div className= "dashboard-page">
          <TopHeader />
          </div>
      );
  }
}

export default Dashboard;
