//InitSection1HomePage.js- Initializetion of data of Section1 of Home Page --------------------------

import React          from "react";

import { useDispatch } from 'react-redux';

import  "./InitSection1HomePage.css";

import group411_Head  from "./Group411_Head.svg";

let textSection1Left    = null;
let imgSection1Right    = null;

/*html text for section1 - left part */
// screenSize - screen Size, tabletMaxScreenSize - Max Screen Size of tablet
export function InitSection1HomePage() {
//console.log('InitSection1HomePage()---');
  let dispatch = useDispatch();

  imgSection1Right = 
    <div id='group411_Head'>
        <img  id='imgGroup411Head' src={group411_Head} />
    </div> 
  textSection1Left = 
    <div className='contTitleText_880'>           
      <div id='titleText'>
        Test your English level online
      </div>  
      <div id='titleTextDetail'>
        Here you can test and improve your knowledge 
        of English grammar, increase your vocabulary, enrich your speech
        with phraseological verbs, improve your understanding of English 
        speech by listening to novels and cheer up by reading jokes.
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

} // end of InitSection1HomePage

