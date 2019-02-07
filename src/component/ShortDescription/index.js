import React from 'react'

const ShortDescription = (props) => {
    return (
        <div>
            <h6 className="shortheading">{props.shortheading}</h6>
            <span className="shortdescription">{props.shortdescription}</span>
        </div>
    )
}

export default ShortDescription;