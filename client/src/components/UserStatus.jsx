import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class UserStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('look here', this.props.currentStatus,this.props.status )
    if (this.props.currentStatus === this.props.status) {
      this.setState ({
        currentStatus: true
      })
    }

  }

  handleClick(event) {
    event.preventDefault();
    console.log('i was just clicked!')
    var status = [this.props.status, this.props.color, this.props.statusTxt]
    this.props.updateCurrent(status)
    this.forceUpdate()


    // var searchObj = {search: this.state.value}
    // this.props.filter(searchObj)
  }



  render () {
    return (
      <div>

      {
        this.state.currentStatus &&
        <div className = {this.props.status}>
          <div className = 'statusTxt'>{this.props.statusTxt}</div>
          <button onClick = {this.handleClick} className = 'statusBg' style={{ 'background': this.props.color }} ></button>
          <div className = 'statusCircle' style={{ 'background': this.props.color }}></div>
        </div>
      }
      {
        !this.state.currentStatus &&
        <div className = {this.props.status}  style={{opacity: '0.5'}} >
          <div className = 'statusTxt'>{this.props.statusTxt}</div>
          <button onClick={this.handleClick} className = 'statusBg' style={{ border: "3px solid " + this.props.color}} ></button>
          <div className = 'statusCircle' style={{ 'background': this.props.color }}></div>
        </div>
      }
      </div>

    )
  }
}

export default UserStatus;