import React from 'react'
import UserListShow from '../UserListing'
import TopHeader from '../../component/TopHeader/TopHeader';
import LeftPanel from '../../component/Dashboard/LeftPanel';
import RightPanel from '../../component/Dashboard/RightPanel';

class UserProfileDetails extends React.Component {
    render() {
        return (
            <div className= "dashboard-page">
                    <TopHeader />
                    <div className = "dashboard-content-wrap">
                    <LeftPanel />                
                    <UserListShow />
                </div>
            </div>            
        )
    }
}

export default UserProfileDetails;