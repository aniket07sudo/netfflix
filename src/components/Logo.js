import React from 'react';
import logoicon from '../assets/logoo.svg';
import './logo.css';

const logo = (props) => (
    <div className="nav__logo">
        <img src={logoicon} className="netflix__logo"/>
    </div>
)

export default logo;