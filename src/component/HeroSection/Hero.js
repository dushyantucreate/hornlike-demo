import React, { Component } from 'react';
import { Grid, Button} from 'semantic-ui-react'


class Hero extends Component {
  render() {
      return ( 
        <section className="hero-section">
            <Grid columns='equal' divided inverted padded>
                <Grid.Row textAlign='center'>
                    <Grid.Column width={10} className='hero-content-section'>                        
                        <h1 className="hero-title">Change the way you manage time-offtrack job applicants</h1>
                        <h5 className="hero-content">SnapHRM is a modern HR Management Software built with speed and ease of use in mind. We are trusted by thousands of companies worldwide.</h5>                    
                        <Button className="btn-style" color='green' size='massive'>Login</Button>
                        <Button className="btn-style" color='grey' size='massive'>Signup</Button>                        
                    </Grid.Column> 
                </Grid.Row>
            </Grid>
          </section>
      );
  }
}

export default Hero;
