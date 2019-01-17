import React from 'react';
import { Rail, Segment, Tab, Image } from 'semantic-ui-react'
import TopHeader from '../../component/TopHeader/TopHeader';
import UserProfile from '../../component/UserProfile/ProfileLeftSide';
import ProfileRightSide from '../../component/UserProfile/ProfileRightSide';
import HappyIcon from '../../images/happy.svg';
import '../../semantic/profile.scss';

export class Profile extends React.Component {
    render() {
        const panes = [
            { menuItem: 'About', render: () =>
                <Tab.Pane>
                    <ProfileRightSide />               
                </Tab.Pane> 
            },
            { menuItem: 'Appreciations', render: () => 
                <Tab.Pane className="space-box">
                    <Image className="smile-icon"
                        src= {HappyIcon}
                        alt= {HappyIcon}
                    />
                    First appreciation coming soon
                </Tab.Pane> 
            },
            { menuItem: 'Increment & Promotion', render: () => 
                <Tab.Pane className="space-box">
                    <Image className="smile-icon"
                        src= {HappyIcon}
                        alt= {HappyIcon}
                    />
                    First increment coming soon
                </Tab.Pane> 
            },
        ]
        return (
            <>
                <div className= "dashboard-page">
                    <TopHeader />
                </div>
                <div className="user-profile-container">
                    <Segment className="user-profile-row">
                        <div className="profile-left-col">
                            <Rail internal position='left'>
                                <Segment>
                                    <UserProfile />
                                </Segment>
                            </Rail>
                        </div>
                        <div className="profile-right-col">
                            <Rail internal position='right'>
                                <Tab className="right-tab-row" panes={panes} />
                            </Rail>
                        </div>
                    </Segment>
                </div>
            </>
        );
    }
}

export default Profile;