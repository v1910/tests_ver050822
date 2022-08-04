//Init.js- Initializetion of data of  Home Page --------------------------

import { useSelector, useDispatch } from 'react-redux';


import {InitSection1HomePage}  from "../initSection1HomePage/InitSection1HomePage.js"; //init data for section 1 of the home page
import {InitSection2HomePage}  from "../initSection2HomePage/InitSection2HomePage.js"; //init data for section 2 of the home page
import {InitSection3HomePage}  from "../initSection3HomePage/InitSection3HomePage.js"; //init data for section 3 of the home page
import {MenuMainPage}          from "../menuMainPage/MenuMainPage.js"; //init data for the menu of the home page

let initSection1HomePage    = null;
let initSection2HomePage    = null;
let initSection3HomePage    = null;
let menuMainPage            = null;


// init data for 3 sections  of the home page 
export function Init() {//=============================================

//console.log('Init.js----')  

  let currentPhrasesServer   = null;

  let currentPhrases         = useSelector((store) => store.currentPhrases); 

  let dispatch = useDispatch();

  // reading phrases from DB -------------------
  if(currentPhrases !== null) {
    currentPhrasesServer = '/get' + currentPhrases;
  } else currentPhrasesServer = '/home';
  //console.log('Phrases: currentPhrasesServer=', currentPhrasesServer);

  const axios = require('axios');

  async function makeGetRequest() {

    let res = await axios.get(currentPhrasesServer);

    let data = res.data;
  //console.log('Phrases: currentPhrasesServer data=', data);

    dispatch({type: 'ShowCurrentPhrases', payload: { phrases: data } })
    
  }// async ---------------------------------

  makeGetRequest();

  
  menuMainPage         = MenuMainPage();
  
  initSection1HomePage = InitSection1HomePage();

  initSection2HomePage = InitSection2HomePage();

  initSection3HomePage = InitSection3HomePage();

  
  return null;

} // end of Init=============================================

