import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export class ProfileRightSide extends React.Component {
  render() {
    return (
      <>
        <div className="user-info-right">
          <div className="user-info-col">
            <h2 className="heading-icon">
              Basic Information
            </h2>
            <div className="user-data-detail">
              <div className="user-detail-column">
                <span className="user-property">Full Name</span>
                <span className="user-value">Chandan Kumar</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Employee ID</span>
                <span className="user-value">EMP1989</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Email Address</span>
                <span className="user-value">chandankumar@ucreate.co.in</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Gender</span>
                <span className="user-value">Female</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Martial Status</span>
                <span className="user-value">Unmarried</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Status</span>
                <span className="user-value green-badge">Active</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Probation</span>
                <span className="user-value grey-badge">No</span>
              </div>
            </div>
          </div>

          <div className="user-info-col">
            <h2 className="heading-icon home">
              Company Relations
            </h2>
            <div className="user-data-detail">
              <div className="user-detail-column">
                <span className="user-property">Department</span>
                <span className="user-value">-</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Designation</span>
                <span className="user-value">-</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Location</span>
                <span className="user-value">Head Office</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Manager</span>
                <span className="user-value grey-badge">No</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Reports To</span>
                <span className="user-value">-</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Joining Date</span>
                <span className="user-value">-</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Work Duration</span>
                <span className="user-value">-</span>
              </div>
            </div>
          </div>

          <div className="user-info-col">
            <h2 className="heading-icon phone">
              Contact Information
            </h2>
            <div className="user-data-detail">
              <div className="user-detail-column">
                <span className="user-property">Mobile Phone</span>
                <span className="user-value">+91 9780536004</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Emergency Contact Number</span>
                <span className="user-value">-</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Emergency Contact Person</span>
                <span className="user-value">-</span>
              </div>
              <div className="user-detail-column">
                <span className="user-property">Address</span>
                <span className="user-value">-</span>
              </div>
            </div>
          </div>
        </div>  
      </>
    );
  }
}

export default ProfileRightSide;