//Header.js- header of the site --------------------------

import React from "react";

import { useSelector } from 'react-redux';

import {Section1MainPage}           from "../section1MainPage/Section1MainPage.js"; // html text for section1 - left part
import {Section2MainPage}           from "../section2MainPage/Section2MainPage.js"; // html text for section2 - left part
import {Section3MainPage}           from "../section3MainPage/Section3MainPage.js"; //html text for section 3 of the main page
import {FooterSmallBigScreen}       from "../footerSmallBigScreen/FooterSmallBigScreen.js"; // footer for small and big screen  

import  "./Header.css";

let menuMainPage             = null;
let section1MainPage         = null;
let section2MainPage         = null;
let section3MainPage         = null;
let footerSmallBigScreen     = null;


export function  Header() {  
//console.log('Header---');

  menuMainPage         = useSelector((store) => store.menuMainPage); 

  
//console.log('Header---menuMainPage=',menuMainPage);

  section1MainPage     = Section1MainPage();

  section2MainPage     = Section2MainPage();

  section3MainPage     = Section3MainPage();

  footerSmallBigScreen = FooterSmallBigScreen();

  return ( 
    <div id='contFirstPage'>

      {menuMainPage}
      
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

