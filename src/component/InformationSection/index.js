import React from 'react'
import { Grid, GridRow } from 'semantic-ui-react'

const Information = ({Column1, Column2, data}) => (    
    <Grid divided='vertically' columns='two'>
        <GridRow columns={2}>
            { Column1( data) }
            { Column2( data) }
        </GridRow>
    </Grid>    
)

export default Information

