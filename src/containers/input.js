import React, { Component } from 'react';
import chevron from '../assets/next.svg';
import './Input.css';

class Input extends Component {

    state = {
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true,
                    emailValid:true
                },
                valid:false,
                touched:false
            }
        },
        formControl:false
    }

    checkValidity(value,rules) {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.emailValid) {
             isValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event,identifier) => {
        const updatedControls = {
            ...this.state.controls
        }
        const updatedElement = {
            ...updatedControls[identifier]
        }
        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value,updatedElement.validation);
        updatedElement.touched = true;
        // if(updatedElement.value !== null) {
        //     updatedElement.placeholder = false;
        // } else {
        //     updatedElement.placeholder = true;
        // }
        updatedControls[identifier] = updatedElement;
        console.log(updatedElement.placeholder);
        this.setState({controls:updatedControls});
    }

    render() {
        const formElement = [];
        for(let key in this.state.controls) {
            formElement.push({
                id:key,
                config:this.state.controls[key]
            });
        }

        return(
            <div>
            <div className="form">
                {formElement.map(identifier => (
                    <input type="text" className="input" value={identifier.config.value} onChange={(event) => this.inputChangedHandler(event,identifier.id)} required />
                ))}
                <label className="label-name">
                    <span className="content-name">Email address</span>
                </label>
            <button className="btn-started"><span>GET STARTED</span> <img className="arrow" src={chevron}></img></button>
            {!this.state.controls.email.valid && this.state.controls.email.touched ? <span className="bottom"></span> : null}
            
            </div>
            {!this.state.controls.email.valid && this.state.controls.email.touched ? <span className="error">Please enter a valid email address</span> : <span className="error"></span>}
            </div>
        )
    }
}

export default Input;