//ContentShortMenu.js - Content of Short Menu of main page

import React           from "react";
import { useSelector } from 'react-redux';

import backArrowBlue   from "./BackArrowBlue.svg";

import  "./ContentShortMenu.css";

let visibContentShortMenu    = null;

/* short menu*/
export function ContentShortMenu(){
//console.log('ContentShortMenu-------------------')
  visibContentShortMenu    = useSelector((store) => store.visibContentShortMenu); 
  
  return( 
    <div id='contShortMenu' style={visibContentShortMenu}>
      <ul>
        <li><a href='#'>Tests <img src={backArrowBlue} /></a>
          <ul id='contMenuTest'>
            <li><a href="#" onClick=''>Test1 (B1)</a></li>
            <li><a href="#">Test2 (B1)</a></li>
            <li><a href="#">Test3 (B2)</a></li>
            <li><a href="#">Test4 (B2)</a></li>
            <li><a href="#">Test5 (B2)</a></li>
          </ul>
        </li>
        <li><a href='#'>Words <img src={backArrowBlue} /></a>
          <ul>
            <li><a href="#">Society</a></li>
            <li><a href="#">Sport</a></li>
            <li><a href="#">Accommodation</a></li>
            <li><a href="#">Appearance</a></li>
            <li><a href="#">Prepositions</a></li>
            <li><a href="#">Nature</a></li>                
          </ul>            
        </li>
        <li><a href='#'>Listen <img src={backArrowBlue} /></a>
          <ul>
            <li><a href="#">Story1</a></li>
            <li><a href="#">Story2</a></li>
            <li><a href="#">Story3</a></li>
            <li><a href="#">Story4</a></li>
          </ul>            
        </li>
        <li><a href='#'>Phrases <img src={backArrowBlue} /></a>
          <ul>
            <li><a href="#">Greatings</a></li>
            <li><a href="#">Phrasalverbs</a></li>
            <li><a href="#">Presentation</a></li>
            <li><a href="#">Spring</a></li>
          </ul>            
        </li>
        <li><a href='#'>Jokes</a></li>
        <li><a href='#'>Statistics</a></li>
      </ul>
      <div id='loginButton'>Login</div>      
    </div>
    );

} // end of contentShortMenu() ---