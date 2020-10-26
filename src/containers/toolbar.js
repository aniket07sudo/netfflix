import React, { Component } from 'react';
import Logo from '../components/Logo';
import './toolbar.css';

class Toolbar extends Component {


    render() {
        return(
            <nav className="nav">
                <Logo />
                <button className="nav__signin">Sign In</button>
            </nav>
        )
    }
}

export default Toolbar;