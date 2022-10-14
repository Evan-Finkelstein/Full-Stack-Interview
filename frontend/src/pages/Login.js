import React, { Component } from 'react'
import request from 'superagent';
import logo from './mobile-logo.png';
import desktop from './desktop-logo.png';

export default class Login extends Component {
    state = {
        username: '',
    }
    handleSubmit = async (e) => {
        let loggedIn = true
        e.preventDefault();
        console.log(this.state);
        this.setState({ loading: true })
        await request
            .get(`http://localhost:7890/api/v1/users/${this.state.username}`)
            .send(this.state)
            .catch(err => {
                alert('Sign up for an account to log in')
                loggedIn = false
            });
        if (loggedIn) {
            localStorage.setItem('USERNAME', this.state.username);
            this.props.history.push('/user');
        } else {
            this.props.history.push('/signup');
        }
    }

    render() {
        return (
            <div className='main'>
            <img className='mobile-logo' src={logo} />
            <img className='desktop-logo' src={desktop} />
            <div className='form-area'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <h2 className='text'>Log In</h2>
                        <input
                            className='input'
                            onChange={(e) => this.setState({ username: e.target.value })}
                            value={this.state.username} 
                            placeholder="Username"
                            />
                        <input
                            className='input'
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password} 
                            placeholder="Password"
                            />
                
                    <button className='button'> <div className='button-text'>Log in</div> </button>
                   <div className='already'> <a className='redirect' href="/signup">Sign Up</a></div>
               </form>
               </div>
        </div>
        )
    }
}