import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import Header from '../TopHeader/TopHeader';

const Basic = () => (
    <div>
        <Header />
        <Container text>
          <div className="sign-up-container">          
            <h1>Sign up for Free</h1>
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
                          .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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

                            <label>Company Name</label>
                            <Field type="text" name="companyname" />
                            <ErrorMessage className="error" name="companyname" component="div" />

                            <label>Desired URL</label>    
                            <Field type="text" name="desiredurl" />
                            <ErrorMessage className="error" name="desiredurl" component="div" />


                            <h3>Account Details</h3>
                            <label>Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage className="error" name="email" component="div" />

                            <label>Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage className="error" name="password" component="div" />

                            <label>Confirm Password</label>
                            <Field type="password" name="confirmpassword" />
                            <ErrorMessage className="error" name="confirmpassword" component="div" />                     

                            <Button className="signup-btn" type="submit"  disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                                Sign Up
                            </Button>
                          </Form>
                        </div>
                    </div>
               )}
            />
        </div>
    </Container>
</div>);
  
export default Basic;