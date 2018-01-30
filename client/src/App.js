import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Flash from './layout/Flash.js';
import Footer from './layout/Footer.js';
import Home from './Home.js';
import Nav from './layout/Nav.js';
import Login from './auth/Login.js';
import Signup from './auth/Signup.js';
import Stats from './pages/Stats.js';
import Journal from './pages/Journal.js';
import Reward from './pages/Reward.js';
import Connect from './pages/Connect.js';
import Articles from './pages/Articles.js';
import Stories from './pages/Stories.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount = () => {
    this.getUser();
  }

  getUser = () => {
    // If there is a token in localStorage
    let token = localStorage.getItem('mernToken');
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      });
    } else {
      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token);
        this.setState({
          token: response.data.token,
          user: response.data.user
        });
        //   Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log('cdm', err);
        this.setState({
          token: '',
          user: null
        });
      })
    }
  }

  setFlash = (t, msg) => {
    this.setState({
      flash: msg,
      flashType: t
    });
  }

  cancelFlash = () => {
    this.setState({
      flash: '',
      flashType: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav user={this.state.user} updateUser={this.getUser} />
            <div className="space">
              <Flash flashType={this.state.flashType} flash={this.state.flash} setFlash={this.setFlash} cancelFlash={this.cancelFlash} />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={
                () => (<Login user={this.state.user} setFlash={this.setFlash} updateUser={this.getUser} />)} />
              <Route path="/signup" component={
                () => (<Signup user={this.state.user} setFlash={this.setFlash} updateUser={this.getUser} />)} />
              <Route exact path="/stats" component={
                () => (<Stats user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/journal" component={
                () => (<Journal user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/reward" component={
                () => (<Reward user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/connect" component={
                () => (<Connect user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/articles" component={
                () => (<Articles user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/stories" component={
                () => (<Stories user={this.state.user} setFlash={this.setFlash} />)} />
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
