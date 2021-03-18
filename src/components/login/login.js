import React from 'react';
import { addNewUser, toggleSignup } from "../../redux/UserActionCreators.js"
import { connect } from 'react-redux';

const Login = (props) => {

  const { signup, toggleSignup } = props

  return(
    <>
      <h3>{ signup ? 'Sign up' : 'Login'}</h3>
      <form>
        { signup && 
        <>
          <label>Name:</label>
          <input type="text" name="first_name" placeholder="first"/>
          <input type="text" name="last_name" placeholder="last"/><br/>
        </>
        }
        <label>Username: <input type="text" name="username"/></label><br/>
        <label>Password: <input type="password" name="password"/></label>
        { signup && <><input type="password" name="passwordConfirmation" placeholder="confirm password"/></>}
        <br/>
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <br/>
      <button onClick={toggleSignup}> { signup ? 'Login':'Sign up'}</button>
    </>
  )
}

const mapStateToProps = (state) => ({ ...state.user })

export default connect(mapStateToProps, { addNewUser, toggleSignup })(Login)