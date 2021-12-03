import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Tabletop from "tabletop";

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