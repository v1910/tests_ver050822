//Section2MainPage.js - init data  of Section2 of MainPage

import { useSelector } from 'react-redux';

import {Section2Test}  from "../section2Test/Section2Test.js"; //Section 2 of Tests

let initSection2HomePage = null;

/*html text for section 2 of the main page */
export function Section2MainPage() {

  initSection2HomePage = useSelector((store) => store.initSection2HomePage);

   switch (initSection2HomePage) {
    case 'Tests': 
      initSection2HomePage = Section2Test();
      break;
    case 'Words': 
//      initSection2HomePage = Section2Word();
    break;

  }

  return initSection2HomePage;

}// end of Section2MainPage()