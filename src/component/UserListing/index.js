import React from 'react'
import axios from 'axios'
import UserList from '../UserList'
import { Grid, Image, Container } from 'semantic-ui-react'

class UserListing extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            userdetails: [],                 
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res => {
            console.log('res.data', res.data);
            const remaining = res.data.splice(10);
            console.log('res.data 3', res.data);
            this.setState ({ userdetails: res.data, remaining });
        })
        
    }

    render () {
        return (       
            <Container>
                <Grid>
                    <Grid.Row columns="3">            
                        {this.state.userdetails.map(user => (
                            <UserList {...user} />
                        ))}
                    </Grid.Row>
                </Grid>
            </Container>                                 
        )
    }
}

export default UserListing;