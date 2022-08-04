//Section3MainPage.js - Section3 for Main Page

import { useSelector } from 'react-redux';

import  "./Header.css";


let initSection3HomePage = null;


/*html text for section 3 of the main page */
export function Section3MainPage() {

    initSection3HomePage = useSelector((store) => store.initSection3HomePage);

    return {initSection3HomePage};
}          