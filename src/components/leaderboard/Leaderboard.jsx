import "../../../src/styles/leaderboard.scss"
import React, { useEffect, useState, Fragment } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LeaderboardData from "../../screens/LeaderboardData"
import Tabletop from "tabletop";

export default function Leaderboard() {
    const [data, setData] = useState([]);
    
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1qylFKLk_EoLVIWKIEdEwQVDKEIZ3nBP2oa1Lyjm-D2g/edit#gid=1641582698';

    function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                    callback: showInfo,
                    simpleSheet: true } )
    }

    function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
    }

    window.addEventListener('DOMContentLoaded', init)

    return (
        <div className="leaderboard">
            <div className="sectionhead"><h2>Leaderboard</h2></div>
                <LeaderboardData/>
        </div>
    )
}

