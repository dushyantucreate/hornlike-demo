import React from 'react'
import { Grid, Container } from 'semantic-ui-react'


class HeroWidget extends React.Component {
    render(){
        return (
            <Container>
                <Grid columns='three' divided>
                    <Grid.Row textAlign='center'>
                        <Grid.Column className="widget-content">
                            <h3>1- Click Payroll</h3>
                            <p>Hassle free! Generate payroll in a single click. Review and edit salary components at your ease. </p>
                        </Grid.Column>
                        <Grid.Column className="widget-content">
                            <h3>Easy Applicant Tracking</h3>
                            <p> Gather applicants with shareable job pages. Shortlist, schedule interviews and select candidates with a simple drag and drop. </p>
                        </Grid.Column>
                        <Grid.Column className="widget-content">
                            <h3>Employee Self-Service</h3>
                            <p>Lessen your work with a powerful employee self-service portal.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}  

export default HeroWidget;