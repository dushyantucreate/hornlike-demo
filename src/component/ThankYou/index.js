import React from 'react'
// import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";

import {
  Button,
  Container,
  Header,
  Icon,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

class ThankYou extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRedirect: false,
    }
  }

  getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

  handleClick = () => {
    this.setState ({isRedirect: true})
  }
  

 homepageHeading = () => (
  <Container text>
    <Header
      as='h1'
      content='Thank you for signup'
      inverted
      style={{
        fontSize:'4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='For login just click on below link'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
      
    
    <Button onClick={this.handleClick}
     primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
);
    render() {

      if(this.state.isRedirect) {
        return <Redirect to="/Login" />
      }
        return(
            <Responsive getWidth={this.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}
            >
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical
              >
                {this.homepageHeading()}
              </Segment>
            </Visibility>
    
            
          </Responsive>
        );
    }
} 

export default ThankYou