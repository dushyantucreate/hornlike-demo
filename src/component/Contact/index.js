import React from 'react'
import ContainerWithTitle from '../ContainerWithTitle'
import Header from '../TopHeader/TopHeader';
import SplitSection from '../SplitSection'
import {Formik} from 'formik'
import CompanyInfo from '../CompanyInfo'
import { Button } from 'semantic-ui-react'
import ShortDescription from '../ShortDescription'


class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header />                
                    <SplitSection sectiontitle="Contact Us"
                        left={
                            <ContainerWithTitle containerstyle="round"
                                title="Write to us"
                            >
                                <Formik
                                    initialValues = {{name:'', companyName: '', email: '', telephone: ''}}

                                    validate={values => {
                                        let errors = {};
                                        if(!values.name) {
                                            errors.name = "Please enter your name."
                                        }
                                        if(!values.companyName) {
                                            errors.companyName = "Please enter your company name."
                                        }
                                        if(!values.email) {
                                            errors.email = "Please enter your email address."
                                        }
                                        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                            errors.email = "You have enter invalid email address."
                                        }
                                        if(!values.telephone) {
                                            errors.telephone = "Please enter your email address."
                                        }
                                        return errors;
                                    }}
                                    onSubmit = {(values, {setSubmitting}) => {
                                        console.log(values);
                                        setTimeout= (()=> {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                 {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,                                
                                    }) => (

                                    <form onSubmit={handleSubmit}>
                                        <div className="input-box">                                            
                                            <input fluid placeholder='Name'
                                                onChange={handleChange} 
                                                onBlur={handleBlur} 
                                                type="text" 
                                                name="name" 
                                                value={values.name} 
                                                />

                                            <div className="error-message">{errors.name && touched.name && errors.name}</div>
                                        </div>

                                        <div className="input-box">
                                            
                                            <input 
                                                fluid 
                                                placeholder='Company Name'
                                                onChange={handleChange} 
                                                onBlur={handleBlur} 
                                                type="text" 
                                                name="companyName" 
                                                value={values.companyName} 
                                            />

                                            <div className="error-message">{errors.companyName && touched.companyName && errors.companyName}</div>
                                        </div>                                        

                                        <div className="input-box">
                                            
                                            <input 
                                                fluid 
                                                placeholder='E-mail address'
                                                onChange={handleChange} 
                                                onBlur={handleBlur} 
                                                type="email" 
                                                name="email" 
                                                value={values.email} 
                                            />
                                            <div className="error-message">{errors.email && touched.email && errors.email}</div>
                                        </div>

                                        <div className="input-box">                                            
                                            <input 
                                                fluid 
                                                placeholder='Telephone number'
                                                onChange={handleChange} 
                                                onBlur={handleBlur} 
                                                type="number" 
                                                name="telephone" 
                                                value={values.telephone} 
                                            />
                                            <div className="error-message">{errors.telephone && touched.telephone && errors.telephone}</div>
                                        </div>                                        

                                        <Button color='teal' fluid size='large' type="submit" disabled={isSubmitting}>
                                            Submit
                                        </Button>
                                    </form>
                                    )}
                                </Formik>
                            </ContainerWithTitle>
                        }

                        right={
                            <ContainerWithTitle containerstyle="round"
                                title="Company Info"
                            >
                                <CompanyInfo description="BrewBroker Ltd" />
                                <ShortDescription shortheading="AWRS" shortdescription="XYAW000000112037" />
                                <br />
                                <ShortDescription shortheading="AWRS" shortdescription="XYAW000000112037" />
                                <br />
                                <ShortDescription shortheading="AWRS" shortdescription="XYAW000000112037" />
                                <br />
                                <ShortDescription shortheading="AWRS" shortdescription="XYAW000000112037" />
                            </ContainerWithTitle>
                        }
                    />                    
                
            </div>
        )
    }
}

export default Contact;