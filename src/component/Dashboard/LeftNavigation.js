import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftNavigation extends Component {
  render() {
      return ( 
          <div className="left-navigation">
           <ul className="sideNav">
             <li className="sideNav-list">
                 <Link className = "sideNav-list-link" to="/dashboard">Dashboard</Link>
             </li>

             <li className="sideNav-list">
                 <Link className = "sideNav-list-link" to="/dashboard">My Profile</Link>
             </li>

             <li className="sideNav-list">
                <Link className = "sideNav-list-link" to="/dashboard">Team</Link>
             </li>

             <li className="sideNav-list">
                <Link className = "sideNav-list-link" to="/dashboard">Calendar</Link>
             </li>

             <li className="sideNav-list">
                <Link className = "sideNav-list-link" to="/dashboard">News</Link>
             </li>

             <li className="sideNav-list">
                <Link className = "sideNav-list-link" to="/dashboard">Payroll</Link>
             </li>

             <li className="sideNav-list">
                <Link className = "sideNav-list-link" to="/dashboard">Jobs</Link>
             </li>

             <li className="sideNav-list">
                <Link className = "sideNav-list-link" to="/dashboard">Attendance</Link>
             </li>

             <li className="sideNav-list">
               <Link className = "sideNav-list-link" to="/dashboard">Leaves</Link>
             </li>
            </ul>
          </div>
      );
  }
}
  
export default LeftNavigation;