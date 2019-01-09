import React, { Component } from 'react';
import TopHeader from '../../component/TopHeader/TopHeader';
import LeftPanel from '../../component/Dashboard/LeftPanel';

class Dashboard extends Component {
  render() {
      return (
        <div className= "dashboard-page">
            <TopHeader />
            <div className = "dashboard-content-wrap">
              <LeftPanel />
            </div>
        </div>
      );
  }
}

export default Dashboard;
