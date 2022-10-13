import React, { Component } from 'react'
import request from 'superagent';
import logo from './logo.png';
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
            <div className='row'>
                <img className='logo' src={logo} />
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Log In</h2>
                        <label>
                            Username:
                            <input
                                className='input'
                                onChange={(e) => this.setState({ username: e.target.value })}
                                value={this.state.username} />
                        </label>      
                        <button className='button'> Login </button>
                        <a className='redirect' href="/signup">Not a member? Sign up!</a>
                    </form>
                </div>
            </div>
        )
    }
}