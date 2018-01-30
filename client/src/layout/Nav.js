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
              <Link to="/stats">Stats</Link>
              <Link to="/journal">Journal</Link>
              <Link to="/reward">Reward</Link>
              <Link to="/connect">Connect</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/stories">Stories</Link>
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
