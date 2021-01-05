import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import UserStatus from './UserStatus.jsx'

class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <div className = 'userBar'>
        <div className = 'currentUser'>
          <div className = 'userAvatar' >
            <img className = 'userImg' src='/avatar.jpg'></img>
            <div className = 'userStatus' style={{ 'background': this.props.currentStatus[1] }}></div>
          </div>
          <div className = 'userTxt'>
            <div className = 'username'>Marissa</div>
            <div className = 'userStatusTxt'>{this.props.currentStatus[0]}</div>
          </div>
        </div>
        {
              this.props.status.map ((status, index) => (
                <UserStatus status = {status[0]} color = {status[1]} key = {status + "." + index} currentStatus = {this.props.currentStatus}/>
              ))
            }
      </div>
    )
  }
}

export default UserBar;