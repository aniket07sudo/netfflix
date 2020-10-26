import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import home from './containers/home';
import './App.css';
class App extends Component {
    render() {
        return(
           <div>
               <link rel="stylesheet" href="../fontawesome-pro-5.13.0-web/css/all.css" type="text/css"></link>
               <Route path="/" exact component={home}/>
           </div>
        )
    }
}
export default App;
