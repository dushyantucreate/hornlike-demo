import React from 'react'

const CompanyInfo = (props) => {
    return (
        <div>
            <h4 className="child-component-title">{props.titleinfo}</h4>
            <p className="description-style">{props.description}</p>
        </div>
    )
}

export default CompanyInfo;