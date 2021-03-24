import React from 'react';
import { connect } from 'react-redux';
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from "../actions/UserActionCreators.js"

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
    <div className="login">
      <h3>{ signup ? "Sign Up" : "Login"}</h3>
      <>
      <form onSubmit={ onSubmit }>
      { signup ?
        <>
          <input type="text" name="name_first" value={name_first} onChange={handleLoginFormChange} placeholder="First name"/><br/>
          <input type="text" name="name_last" value={name_last} onChange={handleLoginFormChange} placeholder="Last name" /><br/>
        </> 
        : <></>}
          <input type="text" name="username" value={username} onChange={handleLoginFormChange} placeholder="username" /><br/>
          <input type="password" name="password" value={password} onChange={handleLoginFormChange} placeholder="password" /><br/>
      { signup ? 
        <>
          <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange} placeholder="Confirm password" /><br/>
        </> : <></>}
        <input type="submit" value="Enter" /><br/>
      </form>
      </>
      <br/>
      <button onClick={toggleSignup}>{ signup ? "Login" : "Sign up"}</button>
    </div>
  )

}

const mapStateToProps = (state) => ({ 
  signup: state.user.signup,
  form: state.user.loginForm
 })

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)