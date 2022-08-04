//Section3MainPage.js - init data  of Section3 of MainPage

import { useSelector } from 'react-redux';

let initSection3HomePage = null;

/*html text for section 3 of the main page */
export function Section3MainPage() {

  initSection3HomePage = useSelector((store) => store.initSection3HomePage);

  return initSection3HomePage;

}// end of Section3MainPage()