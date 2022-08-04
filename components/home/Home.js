//Home.js- data of the home page of the site --------------------------

import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {FooterSmallBigScreen}       from "./FooterSmallBigScreen.js"; // footer for small and big screen  
import {Section1MainPage}           from "./Section1MainPage.js"; // html text for section1 - left part
import {MenuMainPage}               from "./MenuMainPage.js"; //html text for main menu - the big screen
import {Section2MainPage}           from "./Section2MainPage.js"; //html text for section 2 of the main page
import {Section3MainPage}           from "./Section3MainPage.js"; //html text for section 3 of the main page

import  "./Header.css";

// variales for different screen sizes
let screenSize               = window.innerWidth; //the size of the current screen
const tabletMaxScreenSize    = 880;  // max size of tablet screen

let section1MainPage         = null;
let menuMainPage             = null;
let footerSmallBigScreen     = null;
let section2MainPage         = null;
let section3MainPage         = null;
let currentPhrasesServer     = null;
let currentPhrases           = null;
let menuMainPageComp         = null;

export function  Home() {  
//  console.log('Home---');


  // reading phrases from DB -------------------

  let dispatch                 = useDispatch();

  currentPhrases    = useSelector((store) => store.currentPhrases);
  section1MainPage  = useSelector((store) => store.section1MainPage);
  section2MainPage  = useSelector((store) => store.section2MainPage);
  menuMainPage      = useSelector((store) => store.menuMainPage);
  
  
  if(currentPhrases !== null) {
    currentPhrasesServer = '/get' + currentPhrases;
  } else currentPhrasesServer = '/home';
  //console.log('Phrases: currentPhrasesServer=', currentPhrasesServer);

  const axios = require('axios');

  async function makeGetRequest() {

    let res = await axios.get(currentPhrasesServer);

    let data = res.data;
  //  console.log('Phrases: currentPhrasesServer data=', data);

    dispatch({type: 'ShowCurrentPhrases', 
      payload: {
          phrases: data
      }
    })
    
  }// async

  makeGetRequest();


  console.log('screenSize=',screenSize);

  //screenSize = 800;


  menuMainPageComp     = MenuMainPage(screenSize,tabletMaxScreenSize);

  section1MainPage     = Section1MainPage(screenSize,tabletMaxScreenSize);

  section2MainPage     = Section2MainPage();

  section3MainPage     = Section3MainPage();

  footerSmallBigScreen = FooterSmallBigScreen(screenSize,tabletMaxScreenSize);
/* 
  dispatch({type: 'headSections', 
    payload: {
      section1MainPage: section1MainPage,
      section2MainPage: section2MainPage
    }
  })
*/
  return ( 
    <div id='contFirstPage'>

      <div id='contHeader_198'>
        {menuMainPageComp}
        {menuMainPage}
      </div>
      
      {section1MainPage}

      {section2MainPage}

      {section3MainPage}

      <footer id='footerMainPage'>

        {footerSmallBigScreen}
        
        <div id='lineFooter'>
          <ln/>
        </div>

        <div id='markFooter'>
          ©2022 english learning tests | Website Created By <a id='mailMarkFooter' href='https://developer.mozilla.org'>Vlad K.</a>
        </div>

      </footer>

    </div> 

  )//return

}//end of Header-----------

