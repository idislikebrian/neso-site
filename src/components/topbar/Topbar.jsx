import React from 'react'
import { useTime } from 'react-timer-hook';
import "../../../src/styles/topbar.scss"
import { Link } from 'react-router-dom';
import logo from "../../images/NESO-02.png";



export default function Topbar() {
    const {
        seconds,
        minutes,
        hours,
      } = useTime({ format: '24-hour'});
 
      var time = (hours>9 ? hours : "0"+hours)+ ":" +(minutes>9 ? minutes : "0"+minutes) + ":" + (seconds>9 ? seconds : "0"+seconds) ;
      var today = new Date();
      let monthsArr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      var date = (monthsArr[today.getMonth()]) + ' ' + today.getDate() + ', ' + today.getFullYear();

 

    return (
        <div className="topbar">
            <div className="topsections">
            <h1 class="topsections">Non-Existent Space Organization</h1>
            <Link to="/"><img src= {logo} alt="Logo" /></Link>
            <h1 class="topsections">
                {date} {time}
            </h1>
            </div>
        </div>
    )
}