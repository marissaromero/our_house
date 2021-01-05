import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <div className = {this.props.user} >
          <div className = 'userAvatar' >
            <img className = 'userImg' src='/avatar.jpg'></img>
            <div className = 'userStatus' style={{ 'background': this.props.color }}></div>
          </div>
          <div className = 'userTxt'>
            <div className = 'username'>Marissa</div>
            <div className = 'userStatusTxt'>In Class Lecture</div>
          </div>
        </div>
      </div>



    )
  }
}

export default House