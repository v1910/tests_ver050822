//FooterSmallBigScreen.js - drop down menu for Footer of home page

import React          from "react";

import  "./FooterSmallBigScreen.css";

/* footer for small and big screen */
// screenSize - screen Size, tabletMaxScreenSize - Max Screen Size of tablet
export function FooterSmallBigScreen(screenSize,tabletMaxScreenSize){
   
    let work = null;

    if (screenSize < tabletMaxScreenSize) { // it's less a big screen
        /*footer for small screen ----vvvvvvvvv*/  
        work = (
            <>
                <div id='menuFooter'>
                <div id='TestsFooterMenu'>
                    <div id='TestsFooterMenuMain'>
                    Tests
                    </div>
                    <div id='Test1FooterMenu' className='footerMenu'>
                    Test1 (B1)
                    </div>
                    <div id='Test2FooterMenu' className='footerMenu'>
                    Test2 (B1)
                    </div>
                    <div id='Test3FooterMenu' className='footerMenu'>
                    Test3 (B2)
                    </div>
                    <div id='Test4FooterMenu' className='footerMenu'>
                    Test4 (B2)
                    </div>
                    <div id='Test5FooterMenu' className='footerMenu'>
                    Test5 (B2)
                    </div>
                </div>

                <div id='WordsFooterMenu'>
                    <div id='WordsFooterMenuMain'>
                    Words
                    </div>
                    <div id='SportFooterMenu' className='footerMenu'>
                    Sport
                    </div>                
                    <div id='NatureFooterMenu' className='footerMenu'>
                    Nature
                    </div>                                
                    <div id='SocietyFooterMenu' className='footerMenu'>
                    Society
                    </div>                  
                    <div id='AppearanceFooterMenu' className='footerMenu'>
                    Appearance
                    </div>
                    <div id='PrepositionsFooterMenu' className='footerMenu'>
                    Prepositions
                    </div>
                    <div id='AccommodationFooterMenu' className='footerMenu'>
                    Accommodation
                    </div>
                </div>
                <div id='ListenFooterMenu'>
                    <div id='ListenFooterMenuMain'>
                    Listen
                    </div>
                    <div id='Story1FooterMenu' className='footerMenu'>
                    Story1
                    </div>
                    <div id='Story2FooterMenu' className='footerMenu'>
                    Story2
                    </div>
                    <div id='Story3FooterMenu' className='footerMenu'>
                    Story3
                    </div>
                    <div id='Story4FooterMenu' className='footerMenu'>
                    Story4
                    </div>
                </div>
                </div>

                <div id='menuFooter2'>
                <div id='PhrasesFooterMenu'>
                    <div id='SpringFooterMenu' className='footerMenu'>
                    Phrases
                    </div>                
                    <div id='SpringFooterMain' className='footerMenu'>
                    Spring
                    </div>
                    <div id='VacationFooterMenu' className='footerMenu'>
                    Vacation
                    </div>                
                    <div id='GreatingsFooterMenu' className='footerMenu'>
                    Greatings
                    </div>
                    <div id='PresentationFooter' className='footerMenu'>
                    Presentation
                    </div>                
                    <div id='ThrasalVerbsFooter' className='footerMenu'>
                    ThrasalVerbs
                    </div>
                </div>
                <div id='JokesFooterMenu'>
                    Jokes 
                </div>
                <div id='StatisticsFooterMenu'>
                    Statistics
                </div>
                </div>  
            </>
        )         
    }/*footer for small screen ----^^^^^^^^*/    
    else {
        /*footer for big screen ----vvvvvvvvv*/  
        work = (             
            <div id='menuFooter'>
                <div id='TestsFooterMenu'>
                    <div id='TestsFooterMenuMain'>
                    Tests
                    </div>
                    <div id='Test1FooterMenu' className='footerMenu'>
                    Test1 (B1)
                    </div>
                    <div id='Test2FooterMenu' className='footerMenu'>
                    Test2 (B1)
                    </div>
                    <div id='Test3FooterMenu' className='footerMenu'>
                    Test3 (B2)
                    </div>
                    <div id='Test4FooterMenu' className='footerMenu'>
                    Test4 (B2)
                    </div>
                    <div id='Test5FooterMenu' className='footerMenu'>
                    Test5 (B2)
                    </div>
                </div>

                <div id='WordsFooterMenu'>
                    <div id='WordsFooterMenuMain'>
                    Words
                    </div>
                    <div id='SportFooterMenu' className='footerMenu'>
                    Sport
                    </div>                
                    <div id='NatureFooterMenu' className='footerMenu'>
                    Nature
                    </div>                                
                    <div id='SocietyFooterMenu' className='footerMenu'>
                    Society
                    </div>                  
                    <div id='AppearanceFooterMenu' className='footerMenu'>
                    Appearance
                    </div>
                    <div id='PrepositionsFooterMenu' className='footerMenu'>
                    Prepositions
                    </div>
                    <div id='AccommodationFooterMenu' className='footerMenu'>
                    Accommodation
                    </div>
                </div>

                <div id='ListenFooterMenu'>
                    <div id='ListenFooterMenuMain'>
                    Listen
                    </div>
                    <div id='Story1FooterMenu' className='footerMenu'>
                    Story1
                    </div>
                    <div id='Story2FooterMenu' className='footerMenu'>
                    Story2
                    </div>
                    <div id='Story3FooterMenu' className='footerMenu'>
                    Story3
                    </div>
                    <div id='Story4FooterMenu' className='footerMenu'>
                    Story4
                    </div>
                </div>

                <div id='PhrasesFooterMenu'>
                    <div id='SpringFooterMenu' className='footerMenu'>
                    Phrases
                    </div>                
                    <div id='SpringFooterMain' className='footerMenu'>
                    Spring
                    </div>
                    <div id='VacationFooterMenu' className='footerMenu'>
                    Vacation
                    </div>                
                    <div id='GreatingsFooterMenu' className='footerMenu'>
                    Greatings
                    </div>
                    <div id='PresentationFooter' className='footerMenu'>
                    Presentation
                    </div>                
                    <div id='ThrasalVerbsFooter' className='footerMenu'>
                    ThrasalVerbs
                    </div>
                </div>
                <div id='JokesFooterMenu'>
                    Jokes 
                </div>
                <div id='StatisticsFooterMenu'>
                    Statistics
                </div>
            </div>  
        ); /*footer for big screen ----^^^^^^^^*/  
    }//if

    return work;

} // end of FooterSmallBigScreen