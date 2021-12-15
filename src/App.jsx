import Topbar from "./components/topbar/Topbar";
import Rules from "./components/rules/Rules";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Bulletin from "./components/bulletin/Bulletin";
import "./styles/app.scss";

function App() {
  console.log(
    process.env.REACT_APP_SPREADSHEET_ID,
    process.env.REACT_APP_SHEET_ID,
    process.env.REACT_APP_CLIENT_EMAIL, 
    process.env.REACT_APP_PRIVATE_KEY
    )
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
       <Leaderboard/>
       <Bulletin/>
       <Rules/>
     </div>
    </div>
  );
}

export default App;
