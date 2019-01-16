import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react'


export default class UserNavigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Feature'
          active={activeItem === 'Feature'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Pricing'
          active={activeItem === 'Pricing'}
          onClick={this.handleItemClick}
        />        
        <Menu.Item
          name='Contactus'
          active={activeItem === 'Contactus'}
          onClick={this.handleItemClick}
        />        
        <Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        />                
        <Menu.Item
          name='Register'
          active={activeItem === 'LogRegisterin'}
          onClick={this.handleItemClick}
        />                        
      </Menu>
    )
  }
}
