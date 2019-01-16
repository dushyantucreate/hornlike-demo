import React, { Component } from 'react';
import Calendar from './Calendar';

class RightPanel extends Component {
  render() {
      return ( 
          <div className="right-panel">
            <div className="dashboard-main-content">
                <Calendar />
            </div>
          </div>
      );
  }
}
  
export default RightPanel;