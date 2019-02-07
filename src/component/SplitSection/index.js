import React from 'react'
import { Container } from 'semantic-ui-react'

const SplitSection = (props) => {
    return (
     <Container>        
        <div className="splitPane">
            <h2 className="page-title">{props.sectiontitle}</h2>
            <div className="splitPane-left">
                {props.left}                
            </div>

            <div className="splitPane-right">
                {props.right}
            </div>
        </div>
     </Container>
    )
}

export default SplitSection