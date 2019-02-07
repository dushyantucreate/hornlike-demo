import React from 'react'


const OuterContainer = (props) => {
    return (    
        <div className={`${props.containerstyle}-outer-container`}>
            <h4 className="child-component-title">{props.title}</h4>
            {props.children}
        </div>        
    )
}

export default OuterContainer