import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from "react-router-dom";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
      home:'',
      avatar: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // axios.put('./user', user)
    //   .then(() => {
    //     this.fetch
    //   })
  }


  render () {
    return (
      <div className = 'signUpMain'>
        <div className = 'signUp'>
          <img className = 'signUpLogo' src='/logo.svg'></img>
          <form className = 'signUpFormContainer' onSubmit={this.handleSubmit}>
            <div className = 'signUpTitle'>Sign Up</div>
            <div className = 'firstNameInput'>
              <input className = 'formTxt' value={this.state.firstName} onChange={this.handleChange} placeholder= 'firstname' />
            </div>
            <div className = 'lastNameInput'>
              <input className = 'formTxt' value={this.state.lastName} onChange={this.handleChange} placeholder= 'lastname' />
            </div>
            <div className = 'username2Input'>
              <input className = 'formTxt' value={this.state.username} onChange={this.handleChange} placeholder= 'username' />
            </div>
            <div className = 'password2Input'>
            <input className = 'formTxt' type = 'password' value={this.state.password} onChange={this.handleChange} placeholder= 'password' />
            </div>
            <div className = 'emailInput'>
              <input className = 'formTxt' value={this.state.email} onChange={this.handleChange} placeholder= 'email' />
            </div>
            <div className = 'avatarInput'>
              <input className = 'formTxt' value={this.state.avatar} onChange={this.handleChange} placeholder= 'avatar' />
            </div>
            <div className = 'homeCodeInput'>
              <input className = 'formTxt' value={this.state.home} onChange={this.handleChange} placeholder= 'home' />
            </div>
            <Link to="/">
            <input className = 'joinButton' type="submit" value="join a home" />
            </Link>
            <div className = 'or'> ────────  or  ────────</div>
            <Link to="/">
            <input className = 'createButton' type="submit" value="create a new home" />
            </Link>
          </form>
        </div>
        <img className = 'signUpGirlStudying' src='/girlStudying.svg'></img>
      </div>

    )
  }
}


export default SignUp;