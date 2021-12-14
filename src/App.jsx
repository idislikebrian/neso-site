import Topbar from "./components/topbar/Topbar";
import Rules from "./components/rules/Rules";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Bulletin from "./components/bulletin/Bulletin";
import "./styles/app.scss";

function App() {
  console.log(process.env.React_App_SPREADSHEET_ID)
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
