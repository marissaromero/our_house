import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import House from './House.jsx'
import TopNav from './TopNav.jsx'
import UserBar from './UserBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [['user1', '#FAA61A'], ['user2', '#FC0A0A'], ['user3', '#97F58F']],
      status: [['status1', '#97F58F'], ['status2', '#1ADFFA'], ['status3', '#FAA61A'], ['status4', '#FC0A0A']],
      currentStatus: ['status1', '#97F58F']
    }
  }

  componentDidMount() {


  }

  render () {
    return (
      <div className = 'main'>
        <TopNav />
        <div className = 'center'>
          <div className = 'house'>
          <img className = 'houseBg' src='/homeBg.svg'></img>
          <div className = 'users'>
            {
              this.state.users.map ((user, index) => (
                <House user = {user[0]} color = {user[1]} key = {user + "." + index} currentStatus = {this.state.currenStatus}/>
              ))
            }
          </div>
          </div>

          <UserBar status = {this.state.status} currentStatus = {this.state.currentStatus}/>
          <div className='homeName'>the Johnson's</div>
        </div>
      </div>

    )
  }
}


export default App;

