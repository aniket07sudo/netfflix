import React, { Component } from 'react';
import plus from '../assets/plus.svg';
import './Accordian.css';

class Accordian extends Component {


    render() {
        return(
         
            <div className="accordian-wrapper">
            <span className="accordian" onClick={this.props.clicked}>
        <span className="accordian__title">{this.props.question}</span>
                <img src={plus} className={this.props.expanded ? "plus rotate" : "plus" } />
            </span>
            <div className={this.props.expanded ? "accordian__content show" : "accordian__content" }>
        <p>{this.props.answer}</p>
            </div>
           
            
            </div>
        
        )
    }
}

export default Accordian;