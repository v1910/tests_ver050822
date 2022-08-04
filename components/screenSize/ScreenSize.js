//ScreenSize.js - the size of the current screen

import { useDispatch } from 'react-redux';


let screenSize =          null; //the size of the current screen


export function ScreenSize() {

    let dispatch                 = useDispatch();

    window.addEventListener('resize', function(event){

            screenSize =  window.innerWidth; //the size of the current screen

            dispatch({ type: 'ScreenSize', payload: { screenSize:          screenSize  }});

    })//window.addEventListener

    return null;

}//end of ScreenSize ----------------------
