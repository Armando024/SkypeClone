import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '.././App.css'
class Login extends Component {
  render() {
    return (
      
      <div className="Welcome">
        <Form>
          <FormGroup>
            <Label for="login_email">Email</Label>
            <Input type="email" name="email" id="login_email" placeholder="jon@mail.com"/>
          </FormGroup>
          <FormGroup>
                   <Label for="examplePassword">Password</Label>
                   <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
         </FormGroup>
        </Form>
        <p>click <a href="temp"> here</a> to create an account </p>
      </div>
    );
  }
}

export default Login;
