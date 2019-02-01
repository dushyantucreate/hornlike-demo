import React, { Component } from 'react';
import {Button, Grid, Dropdown, Image } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";


class UserNavigation extends Component {
  constructor(props){
    super(props);
    this.state = {
        auth: true,      
        isLogin: false       
    }
}
componentDidMount() {
    if (window.localStorage.getItem('authToken')) {
        this.setState({isLogin: true});
    }
}

handleClick = () => {
    localStorage.clear('authToken');
    this.setState({auth: false});
}

  render() {
    const { auth, isLogin } = this.state;
        if (!auth) {
            return <Redirect to="/" />
        }
      return ( 
      <div>
        { isLogin &&
          (<Grid.Column className="right" width={8}>
              <Button color='red'
                  type="submit"
                  content="Logout"
                  value="Submit"
                  onClick={this.handleClick}
              />
          </Grid.Column>)}
      </div>
      );
  }
}
  
export default UserNavigation;