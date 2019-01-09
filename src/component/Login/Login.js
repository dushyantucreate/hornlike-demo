import React, { Component } from 'react';
import { Formik } from 'formik';
import { Container, Button, Input, Form } from 'semantic-ui-react'

const Login = () => (
  <Container>  
        <Form>
          <Form.Field>
            <label>First Name</label>
            <Input iconPosition='left' placeholder='Email'>
            </Input>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input iconPosition='left' placeholder='Email'>
            </Input>
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
      </Form>
  </Container>
)

export default Login;
