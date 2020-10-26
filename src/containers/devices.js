import React, { Component } from 'react';
import devices from '../assets/devices.png';
import './Tv.css';
import './devices.css';
import video from '../assets/devices-video.m4v';

class Device extends Component {
    render() {
        return(
           <div className="tv-wrapper">
               <div className="tv">
                <div className="tv__content">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="tv__pic">
                    <div className="tv__pic__container">
                        <img src={devices} className="tv__img"/>
                        <div className="device-video">
                            <video className="tv__video--inner" loop autoPlay muted>
                                <source src={video} />
                            </video>
                        </div>
                    </div>
                </div>
               </div>
           </div>
        )
    }
}

export default Device;