import React, { Component } from 'react';
import MainNavigation from './MainNavigation';

class TopHeader extends Component {
  render() {
      return ( 
          <div>
            <header className = "main-header">
              <div className = "logo">hronline</div>
              <MainNavigation />
            </header>            
          </div>
      );
  }
}

export default TopHeader;
