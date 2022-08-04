//Section2Test.js- section 2 for test --------------------------

import React          from "react";

import { useDispatch } from 'react-redux';
import { HeaderSection2Test } from "../headerSection2Test/HeaderSection2Test";

//import  "./InitSection2HomePage.css";

//import group412_Head  from "./Group412.svg";


let initSection2HomePage = null;

export function Section2Test() {
    
  let dispatch = useDispatch();
  
  initSection2HomePage =
    <section id='section2MainPage'>
        < HeaderSection2Test />


    </section>

    dispatch({type: 'InitSection2HomePage', payload: {initSection2HomePage: initSection2HomePage } });

    return null;

}// end of Section2Test()