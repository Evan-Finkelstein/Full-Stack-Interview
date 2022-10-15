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
            <div className='main'>
                <div className='background'> 
                 <img className='logo' src={logo} />
                </div>
                <div className='form-area'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <h2 className='text'>Sign Up</h2>
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
                            <input
                                className='input'
                                onChange={(e) => this.setState({ password: e.target.value })}
                                value={this.state.password} 
                                placeholder="Confirm Password"
                                />
                        <button className='button'> <div className='button-text'>Sign up</div> </button>
                       <div className='already'>Already a user? <a className='redirect' href="/">Log In</a></div>
                   </form>
                   </div>
            </div>
        )
    }
}