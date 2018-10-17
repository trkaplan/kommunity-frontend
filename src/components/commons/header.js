import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '$/css/header.css';

class Header extends Component {
  render() {
    return (
            <div className="navbar">
                <div className="signup">
                    <div className="background"></div>
                    <div className="button">
                        <div className="background1">
                        <Link to="/"><div className="button1">Sign Up</div></Link>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <div className="login">Login</div>
                </Link>
                <div className="mainmenu">
                    <Link to="/"><div className="solutions">Solutions</div></Link>
                    <Link to="/"><div className="communities">Communities</div></Link>
                    <Link to="/"><div className="features">Features</div></Link>
                    <input className="searchcommunities" placeholder="Search Communities"/>
                </div>
                <Link to="/"><div className="logo">kommunity.app</div></Link>
            </div>
    );
  }
}

export default Header;
