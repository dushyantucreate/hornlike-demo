import React, { Component } from 'react';
import LeftNavigation from './LeftNavigation';

class LeftPanel extends Component {
  render() {
      return ( 
          <div className="left-panel">
          <LeftNavigation />
          </div>
      );
  }
}
  
export default LeftPanel;