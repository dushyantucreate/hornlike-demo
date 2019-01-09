import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import UserIcon from '../../images/profile_image.jpg';


const trigger = (
  <span>
    <Image avatar src={UserIcon} /> Priyanka Sharma
  </span>
)

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]


class UserNavigation extends Component {
  render() {
      return ( 
        <Dropdown
        trigger={trigger}
        options={options}
        pointing='top left'
        icon={null}
      />
      );
  }
}
  
export default UserNavigation;