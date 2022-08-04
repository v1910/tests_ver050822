//HeaderSection2Test.js - header of Section 2 of Tests

import React          from "react";

import { useSelector } from 'react-redux';

import  "./HeaderSection2Test.css";

import questionGroup_330   from "./group_330.svg"; //question symbol
import timerGroup_435      from "./group_435.svg"; //timer symbol

//import { useSelector } from 'react-redux';

//import {Section2Test}  from "../section2Test/Section2Test.js"; //Section 2 of Tests

let headerSection2Test        = null;
let currentTest               = null;
let numberLevel               = null;
let current_question          = null;
let count_time_test           = null;
let count_questions_test      = null;
let drawTimer                 = null; // timer box
let boxCount                  = null; //count of timer boxes
let widthTimerBox             = null; //width of timer box
let width_id_sliderHeaderTest = null;


/*html text for section 2 of the main page */
export function HeaderSection2Test() {

    currentTest               = useSelector((store) => store.currentTest);
    numberLevel               = useSelector((store) => store.numberLevel); // number of Level of test
    current_question          = useSelector((store) => store.current_question);
    count_questions_test      = useSelector((store) => store.count_questions_test);// all questions
    count_time_test           = useSelector((store) => store.count_time_test);// all time of test
    width_id_sliderHeaderTest = useSelector((store) => store.width_id_sliderHeaderTest);// width od id=sliderHeaderTest
    

    boxCount = Math.floor(width_id_sliderHeaderTest/count_questions_test);
    widthTimerBox = width_id_sliderHeaderTest/count_questions_test + 'px';

    let widthBox = {width: widthTimerBox};
    let arr = new Array(boxCount);

//console.log('boxCount=',boxCount);
//console.log('widthTimerBox=',widthTimerBox);
//console.log('count_questions_test=',count_questions_test);

//    sum_oneBoxTimer = <div id='oneBoxTimer' style={widthBox}></div>;
    for(let i=0; i<current_question; i++) {
        arr[i] = <div id='oneBoxTimer' style={widthBox}></div>
    }   

    headerSection2Test = (
        <div id='contHeaderTest'>
            <hr id='headerUpLine'/>
            <div id='headerTestCont'>
                <div className='imgHeaderTestQuestionTimer'>
                    <img className='imgHeaderTestQuestionTimer' src={questionGroup_330} />
                </div>
                <div className="textHeadTestQuestion">
                    Question {current_question} of {count_questions_test}
                </div> 
                <div id='sliderHeaderTest'>
                    <>
                        {arr}
                    </>
                </div>
                <div className='imgHeaderTestQuestionTimer'>
                    <img id='imgHeaderTestQuestionTimer' src={timerGroup_435} />
                </div>
                <div id="textHeaderTestTime">
                    Time: {count_time_test[currentTest]} 
                </div> 
            </div>
            <hr id='headerUpLine'/>
        </div>
    )

    return headerSection2Test;

}// end of Section2MainPage()