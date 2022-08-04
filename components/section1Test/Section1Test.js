//Section1Test.js - reacyion onClick on a test

import React from "react";

import { useSelector, useDispatch } from 'react-redux';

import  "./Section1Test.css";

import group422    from "./Group422.svg";

let imgSection1Right = null;
let textSection1Left = null;
let current_question = null;
let numberTest       = null;
let numberLevel      = null;

export function Section1Test() {

//console.log('onClickTest: numberTest=',numberTest);        
//console.log('onClickTest: numberLevel=',numberLevel);  
    
    let dispatch  = useDispatch();

    current_question  = useSelector((store) => store.current_question);
    numberTest        = useSelector((store) => store.numberTest);
    numberLevel       = useSelector((store) => store.numberLevel);

    imgSection1Right = 
    <div id='contImgTest'>
        <img  id='imgGroup411Head' src={group422} />
    </div> 
    textSection1Left = 
        <div className='contTitleTextTest'>           
            <div id='titleTextSection1Tests'>
                Home > TEST {numberTest}, level {numberLevel} > <span id='titleTextSection1TestsQuestion'>Question {current_question}</span> 
            </div> 
            <div>
                Welcome to the English level tests!
            </div>  
        </div> 

    dispatch({type: 'InitSection1HomePage', 
        payload: {
            imgSection1Right: imgSection1Right,
            textSection1Left: textSection1Left
        }
    })

    return null;

}// end of Section1Test---------------