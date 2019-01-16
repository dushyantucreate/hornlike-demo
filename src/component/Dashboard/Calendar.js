import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calendar extends Component {
  render() {
      return ( 
          <div className="calendar-wrap">
            <div className="calendar-header">
                <div className="calendar-year">2019</div>
                <div className="calendar-day">January</div> 
                <ul className="calendar-actions">
                    <li><Link className = "next-btn" to="/dashboard">Next</Link></li>
                    <li><Link className = "prev-btn" to="/dashboard">Previous</Link></li>
                </ul>
            </div>
            <div className="calendar-body">
                <div className="table-hdrow">
                    <div className="table-cell">Sun</div>
                    <div className="table-cell">Mon</div>
                    <div className="table-cell">Tue</div>
                    <div className="table-cell">Wed</div>
                    <div className="table-cell">Thu</div>
                    <div className="table-cell">Fri</div>
                    <div className="table-cell">Sat</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">1</div>
                    <div className="table-cell">2</div>
                    <div className="table-cell">3</div>
                    <div className="table-cell">4</div>
                    <div className="table-cell">5</div>
                    <div className="table-cell">6</div>
                    <div className="table-cell">7</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">8</div>
                    <div className="table-cell">9</div>
                    <div className="table-cell">10</div>
                    <div className="table-cell">11</div>
                    <div className="table-cell">12</div>
                    <div className="table-cell">13</div>
                    <div className="table-cell">14</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">15</div>
                    <div className="table-cell">16</div>
                    <div className="table-cell">17</div>
                    <div className="table-cell">18</div>
                    <div className="table-cell">19</div>
                    <div className="table-cell">20</div>
                    <div className="table-cell">21</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">22</div>
                    <div className="table-cell">23</div>
                    <div className="table-cell">24</div>
                    <div className="table-cell">25</div>
                    <div className="table-cell">26</div>
                    <div className="table-cell">27</div>
                    <div className="table-cell">28</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">29</div>
                    <div className="table-cell">30</div>
                    <div className="table-cell">31</div>
                    <div className="table-cell">1</div>
                    <div className="table-cell">2</div>
                    <div className="table-cell">3</div>
                    <div className="table-cell">4</div>
                </div>
            </div>
          </div>
      );
  }
}
  
export default Calendar;