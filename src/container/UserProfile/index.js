import React from 'react';
import { Rail, Segment, Tab } from 'semantic-ui-react'
import TopHeader from '../../component/TopHeader/TopHeader';
import UserProfile from '../../component/UserProfile/ProfileLeftSide';

import '../../semantic/profile.scss';

export class Profile extends React.Component {
    render() {
        const panes = [
            { menuItem: 'About', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Appreciations', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Increment & Promotion', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
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
                                <Tab panes={panes} />
                            </Rail>
                        </div>
                    </Segment>
                </div>
            </>
        );
    }
}

export default Profile;