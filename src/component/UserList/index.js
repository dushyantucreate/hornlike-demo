import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const UserList = ({albumId, thumbnailUrl, title, url}) => {
    return (        
        <Grid.Column>
            <Segment>
                <h4>{albumId}</h4>
                <Image src={thumbnailUrl} />
                <p>{title}</p>
                <a href={url}> {url} </a>                    
            </Segment>                    
        </Grid.Column>
    );
}

export default UserList;