//InitSection3HomePage.js - Init data for Section3 of Home Page

import React          from "react";

import { useDispatch } from 'react-redux';

import  "./InitSection3HomePage.css";

import group416_Head  from "./Group416.svg";

let initSection3HomePage = null;

/*html text for section 3 of the main page */
export function InitSection3HomePage() {
//console.log('InitSection3HomePage()---')
    let dispatch = useDispatch();

    initSection3HomePage =    
        <section id='section3MainPage'>
            <div id='frequentlyQuestions'>
            Frequently asked questions
            </div>
            <div id='contImgQuestions'>
                <div id='contImgFrequentlyQuestions'>
                <img className='imgFrequentlyQuestions' src={group416_Head}/>
                </div>
                <div id='contQuestionsAnswers'>
                <div className='contQuestionAnswer'>
                    <div className='contQuestion'>
                    How are these tests different from other sites?
                    </div>
                    <div className='contAnswer'>
                    You can read rules for each test question. 
                    </div>
                </div>
                <div className='contQuestionAnswer'>
                    <div className='contQuestion'>
                    What methods do you use to improve the memorization of English words?              
                    </div>
                    <div className='contAnswer'>
                    There are several centences which help the user to guess the word.
                    </div>
                </div>
                <div className='contQuestionAnswer'>
                    <div className='contQuestion'>
                    Why do you think listening to English novels improves 
                    understanding English speech?
                    </div>
                    <div className='contAnswer'>
                    English novels should not only be listened to, but also read. 
                    As a result, you should learn by ear earch word, 
                    repeating this process as many times as necessery.
                    </div>
                </div>
                <div className='contQuestionAnswer'>
                    <div className='contQuestion'>
                    What is the point of memorising and using phrasal verbs?
                    </div>
                    <div className='contAnswer'>
                    Of couse, you can speak English without using phrasal verbs. 
                    But using them brings you closer to a real Englishman.
                    </div>
                </div>
                </div>
            </div>

        </section>

        dispatch({type: 'InitSection3HomePage', payload: {initSection3HomePage } });

    return null;
}          