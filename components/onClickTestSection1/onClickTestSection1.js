// onClickTestSection1.js - content of section 1 for a test
 
import  "./onClickTestSection1.css";


//import {ContentShortMenu}           from "../contentShortMenu/ContentShortMenu.js"; //short menu

import group422                   from "./Group422.svg";

let imgSection1Right         = null;
let textSection1Left         = null;
let current_question         = null;


export function onClickTestSection1(numberTest, numberLevel, current_question) {   

console.log('onClickTestSection1---');

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

    return [imgSection1Right, textSection1Left];

} //end of onClickTestSection1.js ------            