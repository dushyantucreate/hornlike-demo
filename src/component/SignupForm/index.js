import React from 'react'
import { Container, Button, Input, Label } from 'semantic-ui-react'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import Header from '../TopHeader/TopHeader';
import axios from 'axios';
import { RegisterUser } from '../../utili/URL';
import { Redirect } from 'react-router-dom'

class UserRegisterForm extends React.Component {

    constructor(props){
        super(props); 
        this.state = {          
          isRedirect: false,
          errorMessage: '',
        }
      }

    render(){
        if (this.state.isRedirect) {
            return <Redirect to="/SuccessMessage" />
          }
        return(
            <div>
                <Header />
                <section className="page-title bg-green white-text sign-up-page-title">
                    <Container>
                        <h1>Sign up for Free</h1>
                    </Container>
                </section>
                
                <Container>
                <div className="sign-up-container">                      
                    <Formik
                        initialValues={{companyname:'', desiredurl: '', email: '', password: '', confirmpassword: '' }}
                        validationSchema = {
                            Yup.object().shape({
                                companyname: Yup.string().required('This field is required.'),
                                desiredurl: Yup.string().required('This field is required.'),
                                email: Yup.string()
                                .required('This field is required.')
                                .email('Invalid email address.'),
                                password: Yup.string().required('This field is required'),
                                confirmpassword: Yup.string()
                                .required('This field is required.')
                                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            })
                        }
                        onSubmit={(values, { setSubmitting }) => {
                            axios
                            .post(RegisterUser, {user: values})
                            .then(res => {
                                console.log(res);
                                if(res.status === 200) {
                                    this.setState({ isRedirect: true });
                                }
                            })
                            .catch(error => {
                                this.setState({ errorMessage: 'Something went wrong....' });
                            });
                            setSubmitting(false)
                            
                        }}
                        render={({
                            dirty,
                            touched,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <div className="login-row">
                                <div className="signup-form">
                                <Form onSubmit={handleSubmit}>
                                    <h3>Company Details</h3>
                                    
                                    <div className="input-field-block">
                                        <Label>Company Name</Label>
                                        <Input
                                            id="companyname"
                                            type="text"
                                            className={(errors.companyname && touched.companyname) ? "error-border" : ''}
                                            autoComplete="on"
                                            error={(errors.companyname && touched.companyname)}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage className="error" name="companyname" component="div" />
                                    </div>
        
                                    <div className="input-field-block">
                                        <Label>Desired URL</Label>
                                        <Input
                                            id="desiredurl"
                                            type="text"
                                            className={(errors.desiredurl && touched.desiredurl) ? "error-border" : ''}
                                            autoComplete="on"
                                            error={(errors.desiredurl && touched.desiredurl)}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />                                
                                        <ErrorMessage className="error" name="desiredurl" component="div" />
                                    </div>
        
                                    <h3>Account Details</h3>
        
                                    <div className="input-field-block">
                                        <Label>Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            className={(errors.email && touched.email) ? "error-border" : ''}
                                            autoComplete="on"
                                            error={(errors.email && touched.email)}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />           
                                        <ErrorMessage className="error" name="email" component="div" />
                                    </div>
        
                                    <div className="input-field-block">
                                        <Label>Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            className={(errors.password && touched.password) ? "error-border" : ''}
                                            autoComplete="on"
                                            error={(errors.password && touched.password)}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage className="error" name="password" component="div" />
                                    </div>
        
                                    <div className="input-field-block">
                                        <Label>Confirm Password</Label>
                                        <Input
                                            id="confirmpassword"
                                            type="password"
                                            className={(errors.confirmpassword && touched.confirmpassword) ? "error-border" : ''}
                                            autoComplete="on"
                                            error={(errors.confirmpassword && touched.confirmpassword)}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />                                                                
                                        <ErrorMessage className="error" name="confirmpassword" component="div" />
                                    </div>                                                 

                                    {(this.state.errorMessage !== '' ) && <div className="error-message">{this.state.errorMessage}</div>}

                                    <div className="input-field-block">
                                        <Button className="signup-btn" type="submit"  disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                                            Sign Up
                                        </Button>
                                    </div>
                                </Form>
                                </div>
                            </div>
                    )}
                    />
                </div>
            </Container>
        </div>
        )
    }
}
  
export default UserRegisterForm;