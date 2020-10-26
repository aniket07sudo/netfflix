import React, { Component } from 'react';
import './Tv.css';
import phone from '../assets/phone.jpg';
import './offline.css';
import stranger from '../assets/stranger.png';
import loading from '../assets/downloading.gif';

class Offline extends Component {
    render() {
        return(
           <div className="tv-wrapper">
                <div className="tv">
               <div className="tv__pic">
                <img src={phone} className="phone__img"/>
                <span className="phone__notify">
                    <div className="phone__notifyWrapper">
                    <img src={stranger} className="phone__stranger--img" />
                    <div className="flex-col">
                        <span className="phone__notify--title">Stranger Things</span>
                        <span className="download-text">Downloading..</span>
                    </div>
                    <img src={loading} className="downloading" ></img>
                    </div>
                </span>
               </div>
               <div className="tv__content">
                  <h1>Download your shows to watch offline.</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
               </div>
               </div>
           </div>
        )
    }
}

export default Offline;