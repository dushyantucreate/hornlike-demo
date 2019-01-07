import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import TopHeader from '../../component/TopHeader/TopHeader';
import Accordian from '../../component/Accordian/index';

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
