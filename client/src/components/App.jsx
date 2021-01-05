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
      status: [['status1', '#97F58F', 'Free'], ['status2', '#1ADFFA', 'In a zoom call'], ['status3', '#FAA61A', 'Doing Homework'], ['status4', '#FC0A0A', 'Busy']],
      currentStatus: ['status4', '#FC0A0A', 'Busy']

    }
    this.updateCurrent = this.updateCurrent.bind(this);
  }

  componentDidMount() {
    // this.fetchStatus();
    // this.fetchCurrentStatus()

  }

  // fetchCurrentStatus() {
  //   axios.get('/api/movies')
  //     .then(({data}) => {
  //       this.setState({
  //         currentStatus: data
  //       })
  //     })
  //   console.log('inside fetch status', this.state.status)
  // }

  // addUser(user) {
  //   console.log('I am adding user info', user)
  //   axios.put('./user', user)
  //   .then(() => {
  //     this.fetchCurrentStatus()
  //   })
  // }

  updateCurrent(status) {
    this.setState ({
      currentStatus: status
    })
    console.log('inside update current', this.state.currentStatus)
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
                <House user = {user[0]} color = {user[1]} key = {user + "." + index} updateCurrent = {this.state.updateCurrent}/>
              ))
            }
          </div>
          </div>

          <UserBar status = {this.state.status} currentStatus = {this.state.currentStatus} updateCurrent = {this.updateCurrent}/>
          <div className='homeName'>the Johnson's</div>
        </div>
      </div>

    )
  }
}


export default App;

