import React from 'react'
import { Container} from 'semantic-ui-react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Header from '../TopHeader/TopHeader';

const Basic = () => (
    <div>
        <Header />
        <Container>        
          <div className="sign-up-container">          
            <h1>Sign up for Free</h1>
            <Formik
                initialValues={{companyname:'', desiredurl: '', email: '', password: '' }}
                validate={values => {
                let errors = {};
                if (!values.companyname) {
                    errors.companyname = 'Enter the company name';
                }
                else if (!values.desiredurl) {
                    errors.desiredurl = 'Enter the company url';
                }
                else if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}
                >
                {({ isSubmitting }) => (
                <Form className="signup-form">
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

                    <button className="signup-btn" type="submit" disabled={isSubmitting}>
                    Sign Up
                    </button>
                </Form>
                )}
            </Formik>
            </div>  
      </Container>
    </div>
  );
  
  export default Basic;