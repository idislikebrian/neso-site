import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Tabletop from "tabletop";


  
function init() {
    Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1qylFKLk_EoLVIWKIEdEwQVDKEIZ3nBP2oa1Lyjm-D2g/edit#gid=1641582698',
                    callback: function(data, tabletop) { 
                    console.log(data)
                    },
                    simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)

const LeaderboardData = ({blogs, title}) => {
    
    function init() {
        Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1qylFKLk_EoLVIWKIEdEwQVDKEIZ3nBP2oa1Lyjm-D2g/edit#gid=1641582698',
                        callback: function(data, tabletop) { 
                        console.log(data)
                        },
                        simpleSheet: true } )
    }
    window.addEventListener('DOMContentLoaded', init)
    
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
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_2</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_3</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_4</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_5</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_6</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_7</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_8</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_9</td>
                    <td>0000000</td>
                </tr>
                <tr>
                    <td>TEAM_10</td>
                    <td>0000000</td>
                </tr>
            </table>
            </center>
        </div>

     );
}
 
export default LeaderboardData;