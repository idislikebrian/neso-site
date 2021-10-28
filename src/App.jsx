import Topbar from "./components/topbar/Topbar";
import Rules from "./components/rules/Rules";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Bulletin from "./components/bulletin/Bulletin";
import "./app.scss";

function App() {
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
