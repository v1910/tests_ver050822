//App.js- main program -----------------

import React from 'react';

import {Header} from '../header/Header.js';

import {Init}  from "../init/Init.js"; //init data for 3 sections of the home page

import './App.css';

/*

import {Tests} from '../tests/Tests.js';

import {Words} from '../words/Words.js';

import {Listen} from '../listen/Listen.js';

import {Phrases} from '../phrases/Phrases.js';

import {Jokes} from '../jokes/Jokes.js';

import {Statistics} from '../statistics/Statistics.js';

import {Footer} from '../footer/Footer.js';

import SherlokChair  from "./SherlokChair.gif";

*/

let init = null;

function App() {
//console.log("App: -----------------"); 
  init = Init();

    return (
      <div id="contSite_R195" >     
        <Header />
      </div>    
    )

}
export default App;

/*
    return (
    <>
      <div id="London_bgr" >         
        <Header />
        <div id="sherlok">
            <img src={SherlokChair}/>             
        </div> 
        <div id="header_text_1">
          <b>English Learning Tests</b>
        </div> 

      </div>
      <Tests />
      <Words /> 
      <Listen /> 
      <Phrases />
      <Jokes />
      <Statistics />
      <Footer />     
    </>      
    )



*/