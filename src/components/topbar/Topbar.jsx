import "../../../src/styles/topbar.scss"
import { Link } from 'react-router-dom';
import logo from "../../images/NESO-02.png";

var today = new Date();
var date = (today.getMonth()+1) + ' ' + today.getDate() + ', ' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export default function Topbar() {
    // function currentTime() {
    //     let date = new Date(); 
    //     let hh = date.getHours();
    //     let mm = date.getMinutes();
    //     let ss = date.getSeconds();
    //     let session = "AM";
        
    //     hh = (hh < 10) ? "0" + hh : hh;
    //     mm = (mm < 10) ? "0" + mm : mm;
    //     ss = (ss < 10) ? "0" + ss : ss;
        
    //     let time = hh + ":" + mm + ":" + ss;
        
    //     document.getElementById("clock").innerText = time; 
    //     var t = setTimeout(function(){ currentTime() }, 1000); 
    //   }
      
    // currentTime();

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