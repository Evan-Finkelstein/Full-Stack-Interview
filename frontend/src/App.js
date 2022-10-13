import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import Login from './pages/Login.js'
import SignUp from './pages/SignUp.js'
import User from './pages/User.js'

export default class App extends Component {
  state = {
    username: localStorage.getItem('USERNAME') || '',
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={(routerProps) =>
              <Login
                {...routerProps}
                changeTokenAndUsername={this.changeTokenAndUsername}
              />
            }
            />
            <Route
              exact path='/signup'
              render={(routerProps) =>
                <SignUp
                  {...routerProps}
                  changeTokenAndUsername={this.changeTokenAndUsername}
                />
              }
            />
            <Route
              token={this.state.token}
              exact path='/user'
              render={(routerProps) => <User {...routerProps} token={this.state.username} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}