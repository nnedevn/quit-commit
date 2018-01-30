import React, { Component } from 'react';
import logo from '../logo.svg';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <div>
          <span>
            <Link to="/profile">Profile</Link>
            <Logout updateUser={this.props.updateUser} />
          </span>
          <sidebar className="sidebar">
            <div className="sidebar-text">
              <h3>Stats</h3>
              <h3>Journal</h3>
              <h3>Reward</h3>
              <h3>Connect</h3>
              <h3>Articles</h3>
              <h3>Stories</h3>
            </div>
          </sidebar>
        </div>);
    }
    else {
      links = (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>);
    }

    return(
        <div>
          <nav className="nav">
            <a href="/">Home</a>
            {links}
          </nav>
        </div>
      );
  }
}

export default Nav;
