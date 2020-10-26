import React from 'react';
import './storycard.css';

const story = (props) => (
    <div className="concord__storycard">
    <h1 className="concord__storycard--heading">Unlimited movies, TV shows and more.</h1>
    <h3 className="concord__storycard--subhead">Watch anywhere. Cancel anytime.</h3>
    <h4 className="concord__storycard--caption">Ready to watch? Enter your email to create or restart your membership</h4>
    {props.children}
    </div>
)

export default story;