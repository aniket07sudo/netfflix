import React, { Component } from 'react';

import Tv from './Tv';
import Device from '../containers/devices';
import Footer from './Footer';
import Questions from './questions';

import Offline from '../containers/offline';
import Landing from '../components/Landing';

class Home extends Component {
    render() {
        return(
            <div>
            <Landing />
            <Tv />
            <Offline />
            <Device />
            <Questions />
            <Footer />
            </div>
        )
    }
}

export default Home;