import React from 'react'
import { Grid, GridRow } from 'semantic-ui-react'

const Information = ({Column1, Column2, ...props}) => (    
    <Grid divided='vertically' columns='two'>
        <GridRow columns={2}>
            { Column1( props) }
            { Column2( props) }
        </GridRow>
    </Grid>    
)

export default Information

