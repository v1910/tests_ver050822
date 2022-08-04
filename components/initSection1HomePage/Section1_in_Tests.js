//Section1_in_Tests.js- Section1 in Tests --------------------------

import React          from "react";

import { useDispatch } from 'react-redux';

import  "./Section1_in_Tests.css";

import group422  from "./Group 422.svg";

let textSection1Left    = null;
let imgSection1Right    = null;


export function Section1_in_Tests() {
console.log('Section1_in_Tests()---');

  let dispatch = useDispatch();

  imgSection1Right = 
    <div id='group411_Head'>
        <img  id='imgGroup411Head' src={group422} />
    </div> 
  textSection1Left = 
    <div className='contTitleText_880'>           
        <div id='titleTextSection1Tests'>
            Home    
        </div> 
        <div id='titleText'>
            Welcome to the English level tests!
        </div>  
        <button id='buttonStartTest'>Start The Test</button> 
    </div> 

  dispatch({type: 'InitSection1HomePage', 
    payload: {
      imgSection1Right: imgSection1Right,
      textSection1Left: textSection1Left
    }
  })
  
//console.log('InitSection1HomePage()---textSection1Left=',textSection1Left);
  return null;

} // end of Section1_in_Tests

