import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Link } from "react-router-dom";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }


  handleChange(event) {
    var parameter = event.target.placeholder
    var value = event.target.value
    let updatedElement = {}
    updatedElement[parameter] = value
    this.setState(updatedElement);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.password, this.state.username)
    // var searchObj = {search: this.state.value}
    // this.props.filter(searchObj)
  }

  render () {
    return (
      <div className = 'loginMain'>
        <div className = 'signIn'>
          <img className = 'signInLogo' src='/logo.svg'></img>
          <form className = 'formContainer' onSubmit={this.handleSubmit}>
            <div className = 'signInTitle'>Sign In</div>
            <div className = 'username1Input'>
              <input className = 'formTxt'  value={this.state.username} onChange={this.handleChange} placeholder= 'username' />
            </div>
            <div className = 'password1Input'>
            <input className = 'formTxt' value={this.state.password} type = 'password' onChange={this.handleChange} placeholder= 'password' />
            </div>
            <Link to="/">
              <input className = 'submitButton' type="submit" value="submit" />
            </Link>
            <div className = 'signUp1'>new to ourHouse?
              <Link to="/signup">join now</Link>
            </div>
          </form>
        </div>
        <img className = 'girlStudying' src='/girlStudying.svg'></img>
      </div>

    )
  }
}


export default Login;