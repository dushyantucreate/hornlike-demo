import React from 'react';
import { Formik} from 'formik';
import { Header, Grid, Container, Button } from 'semantic-ui-react'
import TopHeader from '../TopHeader/TopHeader';
import axios from 'axios';
import { loginuser } from '../../utili/URL';
import { Redirect } from 'react-router-dom'


const initialState = { "email": "", "password" : "" };

class Login extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      isRedirect: false,
      errorMessage: '',
    }
  }

  componentWillMount() {
    localStorage.setItem("loggeuser", JSON.stringify(initialState));
  }

  render () {
    if (this.state.isRedirect) {
      return <Redirect to="/Dashboard" />
    }

    return (
      <div className="login-page">
        <TopHeader />
          <Container>
            <div className="login-section">
              <Grid className="full-height" verticalAlign='middle' columns={2} centered>
                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                    <Header as='h2' color='teal' textAlign='center'>
                      Log-in to your account
                    </Header> 

                    <div className="login">
                    <Formik 
                        initialValues = {{email: '', password: ''}}
                            validate={values => {
                                let errors = {};
                                if (!values.email) {
                                errors.email = 'Please enter your email address';
                                } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                errors.email = 'Invalid email address';
                                }
                                else if (!values.password) {
                                    errors.password = 'Please enter the password';
                                }                                 
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                axios
                                .post(loginuser, { user: values})
                                .then(res => {
                                    if(res.status === 200 ) {
                                        window.localStorage.setItem('authToken', res.data.user.token);
                                        this.setState({ isRedirect: true });
                                    }
                                })
                                .catch(error => {
                                    this.setState({ errorMessage: 'Something went wrong....' });
                                });
                                setSubmitting(false)
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
                                  <input fluid placeholder='E-mail address'
                                      type="email"
                                      name="email"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.email}
                                  />
                      
                                  <div className="error-message">{errors.email && touched.email && errors.email}</div>
                              </div>

                              <div className="input-box">
                                  <input fluid placeholder='Password'
                                      type="password"
                                      name="password"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.password}
                                  />
                                  <div className="error-message">{errors.password && touched.password && errors.password}</div>
                              </div>
                              {(this.state.errorMessage !== '' ) && <div className="error-message">{this.state.errorMessage}</div>}
                              <Button color='teal' fluid size='large' type="submit" disabled={isSubmitting}>
                                  Submit
                              </Button>
                          </form>
                        )}
                    </Formik>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Container> 
      </div>  
    )
  }
}

export default Login;
