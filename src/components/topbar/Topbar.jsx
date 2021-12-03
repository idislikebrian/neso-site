import "../../../src/styles/topbar.scss"
import { Link } from 'react-router-dom';
import logo from "../../images/NESO-02.png";

var today = new Date();
var date = (today.getMonth()+1) + ' ' + today.getDate() + ', ' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topsections">
            <h1 class="topsections">Non-Existent Space Organization</h1>
            <Link to="/"><img src= {logo} alt="Logo" /></Link>
            <h1 class="topsections">{date} {time}</h1>
            </div>
        </div>
    )
}