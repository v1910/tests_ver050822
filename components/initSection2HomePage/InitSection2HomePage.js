//InitSection2HomePage.js- Initializetion of data of Section2 of Home Page --------------------------

import React          from "react";

import { useDispatch } from 'react-redux';

import  "./InitSection2HomePage.css";

import group412_Head  from "./Group412.svg";
import group414_Head  from "./Group414.svg";
import group70_Head   from "./Group70.svg";
import group413_Head  from "./Group413.svg";
import group240_Head  from "./Group240.svg";
import group241_Head  from "./Group241.svg";

let initSection2HomePage = null;

/*html text for section 2 of the main page */
export function InitSection2HomePage() {
    
  let dispatch = useDispatch();
  
  initSection2HomePage =
    <section id='section2MainPage'>
        <div id='overview'>
            Overview
        </div>
        <div id='contSection2MainPage'>
            <div id='contOverview'>
            <div className='contOverviewItem'>
                <div className='titleOverviewItem'>Tests</div>
                <div className="ellipseOrangeOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group412_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                There are several tests with level B1 and B2. You can test your
                knowledge of English grammar and improve it by using the grammar rules
                for each question here.
                </div>
            </div>
            <div className='contOverviewItem'>
                <div className='titleOverviewItem'>Words</div>
                <div className="ellipseGreenOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group414_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                Here you can increase your vocabulary on several popular topics 
                by trying to guess the correct word from the given examples.
                </div>
            </div>
            <div className='contOverviewItem'>
            <div className='titleOverviewItem'>Listen</div>
                <div className="ellipseBlueOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group240_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                A good way to improve your understanding of English speech is 
                to listen to English novels. You can do  this here and control 
                yourself reading the text.
                </div>
            </div>
            <div className='contOverviewItem'>
            <div className='titleOverviewItem'>Phrases</div>
                <div className="ellipseBlueOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group70_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                To be closer to a real Englishman, I recommend learning 
                phrasal verbs here on practical topics using useful sentences.
                </div>
            </div>
            <div className='contOverviewItem'>
            <div className='titleOverviewItem'>Jokes</div>
                <div className="ellipseOrangeOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group241_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                Several jokes of the site allow you to definitely cheer yourself up.
                </div>
            </div>
            <div className='contOverviewItem'>
            <div className='titleOverviewItem'>Statistics</div>
                <div className="ellipseGreenOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group413_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                Statistics are used to evaluate parts of the site in order to improve it.
                </div>
            </div>
            </div>
        </div>
    </section>

    dispatch({type: 'InitSection2HomePage', payload: {initSection2HomePage } });

    return null;

}// end of InitSection2HomePage()