import BlogList from "../../screens/BlogList"
import Create from "../../screens/Create"
import BlogDetails from "../../screens/BlogDetails"
import NotFound from "../../screens/NotFound"
import "../../../src/styles/bulletin.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "../../screens/Home"

export default function Bulletin() {
    return (
        <div className="bulletin">
            <div className="sectionhead"><h2>Bulletin</h2></div>
            <Router>
                <Switch>
                    <Route exact path="/">
                    <Home/>
                    </Route>
                    <Route path="/create">
                    <Create/>
                    </Route>
                    <Route path="/blogs/:id">
                    <BlogDetails/>
                    </Route>
                    <Route path="*">
                    <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
