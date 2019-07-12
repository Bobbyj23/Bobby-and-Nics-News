import React from 'react';
import { FormControl, FormGroup, ControlLabel, Col, Form, Button } from 'react-bootstrap';
import UsersAPI from '../api/UsersAPI';


function LoginPage({ history, handlelogin }) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    let inputedEmail = event.target.elements['formEmail'].value;
    let inputedPassword = event.target.elements['formPassword'].value;
    console.log(`Email: ${inputedEmail} Password: ${inputedPassword}`)
    if(!inputedEmail || !inputedPassword){
      alert('Please fill in all fields.');
    } else {
      alert('Thank you very much, now I have your info. If you reused that password anywhere, sucks to be you. Mwahahahaha!');
        let user = {
          email: inputedEmail,
          password: inputedPassword
        }
        let loginResponse = await UsersAPI.login(user)
        let userLogin = await loginResponse.json();
        if(!userLogin.error){
          handlelogin(userLogin);
          history.push('/');
        } else {
          document.getElementById("loginForm").reset();
          alert("That wasn't a vaild login. At least not for this Site.")
        }
      
    };

  }

  return (
    <Form horizontal id='loginForm' onSubmit={(e) => handleSubmit(e)}>
      <FormGroup controlId="formEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">Sign in</Button>
        </Col>
      </FormGroup>
    </Form>
  )
}

export default LoginPage;