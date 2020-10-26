import React, { Component } from 'react';
import Accordian from './Accordian';
import Input from './input';
import './questions.css';

class Questions extends Component {

    state = {
        questions:{
            question1:{
                question:'What is Netflix ?',
                answer:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There \'s always something new to discover, and new TV shows and movies are added every week!',
                expanded:false
            },
            question2: {
                question:'How much does Netflix cost ?',
                answer:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.',
                expanded:false
            },
            question3: {
                question:'Where can I watch ?',
                answer:`Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. 
                \n Take Netflix with you anywhere.`,
                expanded:false
            },
            question4:{
                question:'How do I cancel ?',
                answer:'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
                expanded:false
            },
            question5:{
                question:'What can I watch on Netflix ?',
                answer:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
                expanded:false
            }
        }
    }

    toggleHandler = (event,id) => {
        console.log(id);
        const copyState = {
            ...this.state.questions
        }

        const copyElement = {
            ...copyState[id]
        }
        for(let key in this.state.questions) {
            copyState[key].expanded = false;
        }
        copyElement.expanded = !copyElement.expanded;
        copyState[id] = copyElement;
        this.setState({ questions:copyState})
    }

    render() {
        let question = [];
        for(let key in this.state.questions) {
            question.push({
                id:key,
                config:this.state.questions[key]
            })
        }
        return(
            <div className="questions">
                <div className="questions__wrapper">
                <h1 className="questions-head">Frequently Asked Questions</h1>
                <ul>
                    {question.map(q => (
                        <li><Accordian key={q.id} question={q.config.question} answer={q.config.answer} clicked={(event) => this.toggleHandler(event,q.id)} expanded={q.config.expanded} /></li>
                    ))}
                </ul>
                        <div className="input__wrapper">
                            <span className="input--text">Ready to watch? Enter your email to create or restart your membership.</span>
                        </div>
                        <Input />
            </div>
            
            </div>
        )
    }
}

export default Questions;