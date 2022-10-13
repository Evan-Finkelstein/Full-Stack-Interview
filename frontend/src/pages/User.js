import React, { Component } from 'react'
import logo from './logo.png';
import style from './styles.css'
export default class User extends Component {
  state = {
    username: ''
  }

  componentDidMount = async () => {
    const name = localStorage.getItem('USERNAME')
    this.setState({ username: name })
  }

  handleLogOut = () => {
    localStorage.setItem('USERNAME', '');
    this.props.history.push('/')
  }

  render() {
   
    return (
      <div className='row'>
        <img className='logo' src={logo}/>
        <div className='home'>
           <div className='welcome'> Welcome {this.state.username} to your home page!</div>
           <button className='home-button' onClick={() => this.handleLogOut()}>Log out</button>
        </div>
      </div>
    )
  }
}