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
    
    return (
        <div className="leaderboard">
            <div className="sectionhead"><h2>Leaderboard</h2></div>
            <Router>
                <Route exact path="/">
                <LeaderboardData/>
                </Route>
            </Router>
        </div>
    )
}

