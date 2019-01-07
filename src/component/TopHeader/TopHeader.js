import React, { Component } from 'react';
import UserNavigation from './UserNavigation';

class TopHeader extends Component {
  render() {
      return ( 
          <div>
            <header className = "top-header">
            <div className = "logo-wrap">hronline</div>
            </header>
            <UserNavigation />
          </div>
      );
  }
}

export default TopHeader;
