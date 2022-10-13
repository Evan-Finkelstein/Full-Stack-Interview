import React, { Component } from 'react'
import request from 'superagent';
import logo from './logo.png';
export default class Login extends Component {
    state = {
        username: '',
    }

    handleSubmit = async (e) => {
        console.log('submit')
        e.preventDefault();
        console.log(this.state);
       await request
            .post('http://localhost:7890/api/v1/users/')
            .send(this.state);
        localStorage.setItem('USERNAME', this.state.username);
        this.props.history.push('/user');
    }

    render() {
        return (
            <div className='row'>
                <img className='logo' src={logo}/>
                <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <label>
                        Username:
                        <input
                            className='input'
                            onChange={(e) => this.setState({ username: e.target.value })}
                            value={this.state.username} />
                    </label>
                   <button className='button'>Sign Up</button>
                    <a className='redirect' href="/">Already a member? Login!</a>
                </form>
                </div>
            </div>
        )
    }
}