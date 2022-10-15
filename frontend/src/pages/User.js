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
      <div className='main'>
        <div className='background'>  <img className='logo' src={logo} /></div>
        <div className='form-area'>
            <div className='welcome'> Welcome {this.state.username} to your home page!</div>
            <button className='button' onClick={() => this.handleLogOut()}><div className='button-text'>Log Out</div></button>
        </div>
      </div>
    )
  }
}