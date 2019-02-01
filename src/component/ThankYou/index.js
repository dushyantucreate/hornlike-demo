import React from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Container,
  Header,
  Icon,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Thank you for signup'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='For login just click on below link'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
      
    <Link to='/Login'>Login</Link>  
    {/* <Button to='/Login'
     primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button> */}
  </Container>
)



class ThankYou extends React.Component {
    render() {
        return(
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
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
                <HomepageHeading />
              </Segment>
            </Visibility>
    
            
          </Responsive>
        );
    }
} 

export default ThankYou