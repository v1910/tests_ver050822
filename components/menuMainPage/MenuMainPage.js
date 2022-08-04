// MenuMainPage.js - main menu of the site (Header.js includes MenuMainPage.js)
 
import React from "react";

import { useSelector, useDispatch } from 'react-redux';


import  "./MenuMainPage.css";


import {ContentShortMenu}           from "../contentShortMenu/ContentShortMenu.js"; //short menu

import {onClickTestSection1}        from "../onClickTestSection1/onClickTestSection1.js"; //section 1 of the  Test 


import logoTests                  from "./LogoGroup33.svg"; //site logo
import backArrowBlue              from "./BackArrowBlue.svg";
import shortMenuOnOut             from "./Group_466.svg"; //file for showing the short main menu
import closeShortMenu             from "./Group1011.svg"; //file for closing the short main menu


let showNoneImgShortMenuFile = null;
let visibContentShortMenu    = null;
let imgShortMenuFile         = null;//show Group305.svg, otherwise Group1011.svg (false)
let contentShortMenu         = null;
let iconShortMenu            = null; // = shortMenuOnOut or closeShortMenu
let current_question         = null;

/*html text for main menu - the big screen */
// screenSize - screen Size, tabletMaxScreenSize - Max Screen Size of tablet
export function MenuMainPage() {   

console.log('MenuMainPage---');

    let work;

    // write number (par-1) of current test
    function onClickTest(numberTest, numberLevel) {

        dispatch({ type: 'header_testDispatch', payload: 
            {   
                currentTest:          numberTest-1,
                initSection2HomePage:  'Tests',
                initSection3HomePage:  null,
                numberLevel:           numberLevel
            }
        });

        work = onClickTestSection1(numberTest, numberLevel, current_question); //return:  work[0]= imgSection1Right, work[1]=textSection1Left
  
        dispatch({type: 'InitSection1HomePage', 
            payload: {
                imgSection1Right: work[0],
                textSection1Left: work[1]
            }
        })

    }// end of onClickTest---------------


    let dispatch  = useDispatch();

    //screenSize                   = ScreenSize(); //the size of the current screen

    let menuMainPage = null;

    //const  showCurrentTest = <ShowCurrentTest currentTestFromHead='1' />

    visibContentShortMenu    = useSelector((store) => store.visibContentShortMenu); 
    imgShortMenuFile         = useSelector((store) => store.imgShortMenuFile); //show Group305.svg, otherwise Group1011.svg (false)
//    tabletMaxScreenSize      = useSelector((store) => store.tabletMaxScreenSize);     
    iconShortMenu            = useSelector((store) => store.iconShortMenu);     
    current_question         = useSelector((store) => store.current_question);
//    screenSize               = useSelector((store) => store.screenSize);     
/*         
    const [total, setTotal] = useState(0);
    const incrementTotal = () => {
        setTotal((currentTotal) => currentTotal + current_question + 1 );
        console.log('total=',total);
    }
*/

  //console.log('Header: imgShortMenuFile=',imgShortMenuFile);
  
    if(imgShortMenuFile !== true) {
      showNoneImgShortMenuFile = {display: 'none'};
    } else {

      showNoneImgShortMenuFile = {display: 'block'}; 
    }  
    
    contentShortMenu = ContentShortMenu(); // short menu

//console.log('screenSize=',screenSize);    
//console.log('tabletMaxScreenSize=',tabletMaxScreenSize);


//    if (screenSize < tabletMaxScreenSize) {
        menuMainPage =  // for a little screen
        <>
            <div id='contHeader_198'>
                <nav id='contMainMenu_235'>
                <p id='contLogo'><img src={logoTests}/></p>
                <div id='shortMenu'>
                    <img id='imgShortMenu' 
                        onClick= {() => dispatch({  type: 'contShortMenu', 
                                    payload:    {visibContentShortMenu: showNoneImgShortMenuFile,
                                                imgShortMenuFile:      !imgShortMenuFile,
                                                iconShortMenu:         (iconShortMenu === shortMenuOnOut) ? closeShortMenu : shortMenuOnOut
                                                }
                                                })
                                }       
                        src={iconShortMenu} />
                </div>
                {contentShortMenu}
                </nav>        
            </div>
            <nav id='contMainMenu'>
                <p id='contLogo'><img src={logoTests}/></p>
                <ul>
                <li><a href='#'>Tests <img src={backArrowBlue} /></a>
                    <ul id='contMenuTest'>
                    <li onClick={()=>onClickTest(1, 'B1')}><a href='#'>Test1 (B1)</a></li>
                    <li onClick={()=>onClickTest(2, 'B1')}><a href='#'>Test2 (B1)</a></li>
                    <li onClick={()=>onClickTest(3, 'B2')}><a href="#">Test3 (B2)</a></li>
                    <li onClick={()=>onClickTest(4, 'B2')}><a href="#">Test4 (B2)</a></li>
                    <li onClick={()=>onClickTest(5, 'B2')}><a href="#">Test5 (B2)</a></li>
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
                    <ul id='contMenuTest'>
                    <li><a href="#">Story1</a></li>
                    <li><a href="#">Story2</a></li>
                    <li><a href="#">Story3</a></li>
                    <li><a href="#">Story4</a></li>
                    </ul>            
                </li>
                <li><a href='#'>Phrases <img src={backArrowBlue} /></a>
                    <ul id='contMenuTest'>
                    <li><a href="#">Greatings</a></li>
                    <li><a href="#">Phrasalverbs</a></li>
                    <li><a href="#">Presentation</a></li>
                    <li><a href="#">Spring</a></li>
                    </ul>            
                </li>
                <li><a href='#'>Jokes</a></li>
                <li><a href='#'>Statistics</a></li>
                </ul>
                <p className='box' id='contLogin'><span id='contLoginText'>Login</span></p>
            </nav>    
        </>

    dispatch({ type: 'MenuMainPage_menuMainPage', payload: {menuMainPage: menuMainPage }});

    return null;

} // end of MenuMainPage()