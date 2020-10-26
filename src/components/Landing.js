import React from 'react';
import Toolbar from '../containers/toolbar';
import Input from '../containers/input';
import Storycard from '../components/storycard';
import './Landing.css';

const Landing = (props) => (
    <main className="concord">
            <div className="auto-margin">
            <Toolbar />
            <Storycard >
            <Input />
            </Storycard>
            </div>
            </main>
);

export default Landing;