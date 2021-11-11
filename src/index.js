import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import WebFont from 'webfontloader';

const Tabletop = require('tabletop');
 
 var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1qylFKLk_EoLVIWKIEdEwQVDKEIZ3nBP2oa1Lyjm-D2g/edit#gid=1641582698';
 
function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: false } )
  }
 
 function showInfo(data, tabletop) {
  // do something with the data
  console.log(JSON.stringify(data, null, 2));
}
 
//initialise and kickstart the whole thing.
init()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);