import "./leaderboard.scss"
import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function Leaderboard() {
    const [data, setData] = useState([]);
    
    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat.
            <table>
                <tr>
                    <th>Team</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>TEAM_1</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_2</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_3</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_4</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_5</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_6</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_7</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_8</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_9</td>
                    <td>SCORE</td>
                </tr>
                <tr>
                    <td>TEAM_10</td>
                    <td>SCORE</td>
                </tr>
            </table>
            <ul>
                {data.map((item, i) => (
                <Fragment key={i}>
                    Testing
                <li>URL -- {item.rank}</li>
                <li>Email - {item.team}</li>
                <br />
                </Fragment>
                ))}
            </ul>
        </div>
    )
}

