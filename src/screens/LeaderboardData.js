import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { GoogleSpreadsheet } from "google-spreadsheet";
import React from "react";

const LeaderboardData = ({blogs, title}) => {
   
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const [sheetRows,setRows]=React.useState([])
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    const [rowsData,setRowsData]=React.useState([])
    const getSpreadSheet = async (row) => {
        let dataArr=[];
      console.log(typeof PRIVATE_KEY)
        try {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();
        console.log(doc)
        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        setRows(rows)
        if(rows&&rows?.length>0 && rows.length>1 && rows.length>2){
            rows?.map((row)=>{
                let td=row?._rawData
                dataArr.push({team:td[0],score:td[2],rank:td[1]})
            })
        }
        setRowsData(dataArr)
        
        } catch (e) {
        console.error('Error: ', e);
        }
    };
    React.useEffect(()=>{
        if(sheetRows.length===0){

            getSpreadSheet();   
        }
        console.log("---------")
    })
    function compare(a, b) {
        const rankA = Number(a.rank)
        const rankB = Number(b.rank)
        
        let comparison = 0;
        if (rankA > rankB) {
            comparison = 1;
        } else if (rankA < rankB) {
            comparison = -1;
        }
        return comparison;
    }
    rowsData.sort(compare)
    console.log(rowsData)
    return ( 
        <div className="leaderboard-table">
            <center>
            <table>
                <thead>
                <tr>
                    <th>Team</th>
                    <th>Score</th>
                </tr>
                </thead>
              <tbody>
             {
                 rowsData?.map((item)=>(
                    <tr>
                    <td>{item?.team}</td>
                    <td className="score">{item?.score}</td>
                    </tr>
                 ))
             }
              </tbody>
            </table>
            </center>
        </div>
     );
}
 
export default LeaderboardData;