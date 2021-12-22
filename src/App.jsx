import Grid from '@mui/material/Grid';
import Topbar from "./components/topbar/Topbar";
import Rules from "./components/rules/Rules";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Bulletin from "./components/bulletin/Bulletin";
import Footer from "./components/footer/Footer";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
     <Topbar/>
      <Grid container>
        <Grid xs={12} md={12} lg={4}>
        <Leaderboard/>
        </Grid>
        <Grid xs={12} md={12} lg={4}>
        <Bulletin/>
        </Grid>
        <Grid xs={12} md={12} lg={4}>
        <Rules/>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default App;
