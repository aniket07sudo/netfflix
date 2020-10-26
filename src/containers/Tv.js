import React, { Component } from 'react';
import './Tv.css';
import tv from '../assets/tv.png';
import tvVideo from '../assets/tv-video.m4v';

class Tv extends Component {
    render() {
        return(
           <div className="tv-wrapper">
               <div className="tv">
               <div className="tv__content">
                  <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, ChromeCast,Apple TV, Blu-ray players and more.</p>
               </div>
               <div className="tv__pic">
                   <div className="tv__pic__container">
                <img src={tv} className="tv__img"/>
                <div className="tv__video">
                <video className="tv__video--inner" loop autoPlay muted>
                    <source src={tvVideo} type="video/mp4" />
                </video>
                </div>
                </div>
               </div>
               </div>
           </div>
        )
    }
}

export default Tv;