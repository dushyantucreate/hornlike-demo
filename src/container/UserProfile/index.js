import React from 'react';
import { Image, Rail, Segment } from 'semantic-ui-react'
import TopHeader from '../../component/TopHeader/TopHeader';
import UserProfile from '../../component/UserProfile/ProfileLeftSide';

import '../../semantic/profile.scss';

export class Profile extends React.Component {
  render() {
        return (
            <>
                <div className= "dashboard-page">
                    <TopHeader />
                </div>
                <div className="user-profile-container">
                <Segment textAlign='center'>
    <Image src='/images/wireframe/paragraph.png' />

    <Rail internal position='left'>
      <Segment>Left Rail Content</Segment>
    </Rail>

    <Rail internal position='right'>
      <Segment>Right Rail Content</Segment>
    </Rail>
  </Segment>
                    <UserProfile />
                </div>
            </>
        );
    }
}

export default Profile;