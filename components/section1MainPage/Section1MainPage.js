
//Section1MainPage.js - Section1 of Main Page

import React          from "react";

import { useSelector } from 'react-redux';

import  "./Section1MainPage.css";


let imgSection1Right    = null;
let textSection1Left    = null;
let screenSize          = null;
let tabletMaxScreenSize = null;


/*html text for section1 - left part */
// screenSize - screen Size, tabletMaxScreenSize - Max Screen Size of tablet
export function Section1MainPage() {
//console.log('Section1MainPage()---')  
    let htmlTablet = null;

    imgSection1Right      = useSelector((store) => store.imgSection1Right);
    textSection1Left      = useSelector((store) => store.textSection1Left);
    screenSize            = useSelector((store) => store.screenSize);
    tabletMaxScreenSize   = useSelector((store) => store.tabletMaxScreenSize); 

//console.log('Section1MainPage()---textSection1Left=',textSection1Left)  

        htmlTablet = 
        <>
          <section id='section1MainPage_smallScreen'>
            <div id='contSection1'>
              {imgSection1Right}
              {textSection1Left}
            </div>   
          </section>
          <section id='section1MainPage_bigScreen'>
            <div id='contSection1'>
            {textSection1Left}
            {imgSection1Right}
            </div>
          </section>
        </>
//console.log('Section1MainPage()---htmlTablet=',htmlTablet)  
    return htmlTablet;

} // end of Section1MainPage(screenSize,tabletMaxScreenSize)