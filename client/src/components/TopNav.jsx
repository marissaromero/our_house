import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './Login.jsx';
// import {Link } from "react-router-dom";


class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (
        <div className = 'navBlock'>
          <img className = 'title' src='/logo.svg'></img>
          <h2 className = 'create'>create a home</h2>
          <h2 className = 'join'>join a home</h2>
          <div className = 'loginBg'>
          {/* <Link to="/login" className='loginTxt'>login</Link>
          <Link to="/signup" className='loginTxt'>signup</Link> */}
          </div>


        </div>
    )
  }
}

export default TopNav
