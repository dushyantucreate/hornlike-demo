import React from 'react';
import { Image, Button, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import UserAvtar from '../../images/profile_image.jpg';

/* eslint-disable react/prefer-stateless-function */
export class ProfileLeftSide extends React.Component {
  render() {
    return (
      <>
        <div className="user-profile-img">
          <Image
            src= {UserAvtar}
            size='medium'
            wrapped
          />
          <div className="profile-img-edit">
            <Button className="green-btn"
              content='Edit'
              labelPosition='left'
            />
          </div>
          <div className="pmo-contact">
            <h3>Contact</h3>
            <List>
              <List.Item>
                <List.Icon className='mail-icon' />
                <List.Content>
                  <Link to="/">
                    chandankumar@ucreate.co.in
                  </Link>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileLeftSide;