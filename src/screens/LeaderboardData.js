import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Tabletop from "tabletop";

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

const LeaderboardData = ({blogs, title}) => {
    
    return ( 
        <div className="leaderboard-table">
            <center>
            <table>
                <tr>
                    <th>Team</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
                <tr>
                    <td>Team Name</td>
                    <td className="score">0000000</td>
                </tr>
            </table>
            </center>
        </div>
     );
}
 
export default LeaderboardData;