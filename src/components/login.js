import React from 'react';
import { connect } from 'react-redux';
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from "../actions/UserActionCreators.js"
import { Container, Form, Col } from 'react-bootstrap'

const Login = (props) => {

  const { form, handleLoginFormChange, sendLogin, sendSignup, signup, toggleSignup } = props
  const { name_first, name_last, password, passwordConfirmation, username } = form

  const onSubmit = (event) => { 
        event.preventDefault()
        if (signup){
          if (password === passwordConfirmation){
            sendSignup({username: username, name_first: name_first, name_last: name_last, password: password})
          } else {
            alert("Those passwords do not match")
          }
        } else {
          sendLogin({username: username, password: password})
        }
     }


  return(
    props.user ? <></> :
    <div className="home-page login-page">
      <Container bsPrefix="login">
        <h3 className="login-title">{ signup ? "Sign Up" : "Login"}</h3>
        <>
        <Form onSubmit={ onSubmit } className="login-form">
        { signup ?
          <Form.Row inline md={4}>
            <Col>
            <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" name="name_first" value={name_first} onChange={handleLoginFormChange} placeholder="First name"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control  type="text" name="name_last" value={name_last} onChange={handleLoginFormChange} placeholder="Last name"></Form.Control>
            </Col>
          </Form.Row>
          : <></>}
          <Form.Group as={Col}>
            <Form.Label>Username:</Form.Label>
            <Form.Control required type="text" name="username" value={username} onChange={handleLoginFormChange} placeholder="username"></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" name="password" value={password} onChange={handleLoginFormChange} placeholder="password"></Form.Control>
          </Form.Group>
            
        { signup ? 
          <Form.Group as={Col}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control required type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange} placeholder="Confirm password"></Form.Control>
          </Form.Group> : <></>}
          <input type="submit" value="Enter" /><br/>
          </Form>
        </>
        <br/>
        <button onClick={toggleSignup}>{ signup ? "Login" : "Sign up"}</button>
      </Container>
    </div>
  )

}

const mapStateToProps = (state) => ({ 
  signup: state.user.signup,
  form: state.user.loginForm,
  user: state.user.id
 })

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)