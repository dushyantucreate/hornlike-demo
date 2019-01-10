import React, { Component } from 'react';
import TopHeader from '../../component/TopHeader/TopHeader';
import LeftPanel from '../../component/Dashboard/LeftPanel';
import RightPanel from '../../component/Dashboard/RightPanel';

class Dashboard extends Component {
  render() {
      return (
        <div className= "dashboard-page">
            <TopHeader />
            <div className = "dashboard-content-wrap">
              <LeftPanel />
              <RightPanel />
            </div>
        </div>
      );
  }
}

export default Dashboard;
