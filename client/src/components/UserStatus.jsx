import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class UserStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: false
    }
  }

  componentDidMount() {
    if (this.props.currentStatus[0] === this.props.status) {
      this.setState ({
        currentStatus: true
      })
    }
  }

  render () {
    return (
      <div>

      {
        this.state.currentStatus &&
        <div className = {this.props.status}>
          <div className = 'statusTxt'>Free</div>
          <div className = 'statusBg' style={{ 'background': this.props.color }} ></div>
          <div className = 'statusCircle' style={{ 'background': this.props.color }}></div>
        </div>
      }
      {
        !this.state.currentStatus &&
        <div className = {this.props.status}  style={{opacity: '0.5'}} >
          <div className = 'statusTxt'>Free</div>
          <div className = 'statusBg' style={{ border: "3px solid " + this.props.color}} ></div>
          <div className = 'statusCircle' style={{ 'background': this.props.color }}></div>
        </div>
      }
      </div>

    )
  }
}

export default UserStatus;