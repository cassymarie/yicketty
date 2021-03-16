import React, { Component } from 'react';

class Login extends Component {

  state = {
    existing: false,
    first_name: '',
    last_name: '',
    email: '',
    provider: 'email',
  }

  handleFirstNameChange = event => {
    this.setState({
      first_name: event.target.value
    })
  }
  handleLastNameChange = event => {
    this.setState({
      last_name: event.target.value
    })
  }
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleGoogle = event => {
    debugger
    this.setState({ provider: 'google' })
  }


  signup_form = () => {
    return (
    <>
    <form onSubmit={e => this.handleSignEmail(e)}>
      <h2> Sign Up </h2>
      <input type="text" onChange={e => this.handleFirstNameChange(e)} value={this.state.first_name} placeholder="First name"></input>
      <input type="text" onChange={e => this.handleLastNameChange(e)} value={this.state.last} placeholder="Last name"></input>
      <input type="email" onChange={e => this.handleEmailChange(e)} value={this.state.email} placeholder="youEmail@example.com"></input>
      <input type="password" placeholder="password"></input>
      <input type="submit"></input>
    </form>
    <button onClick={e => this.handleGoogle(e)}> Google Login </button>
    </>
    )
  }


  login_form = () => {
    return (
      <>
    <form onSubmit={e => this.handleLoginEmail(e)}>
      <h2> Log In </h2>
      <input type="email" onChange={e => this.handleEmailChange(e)} value={this.state.email} placeholder="youEmail@example.com"></input>
      <input type="password" placeholder="password"></input>
      <input type="submit"></input>
    </form>
    <button> Google Login </button>
    </>
    )
  }

  render() {
    const showForm = this.state.existing ? this.login_form() : this.signup_form()

    return (
      <form className="component">
          {showForm}
      </form>
    );
  }
};

export default Login