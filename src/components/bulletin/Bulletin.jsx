import BlogList from "../../screens/BlogList"
import Create from "../../screens/Create"
import BlogDetails from "../../screens/BlogDetails"
import NotFound from "../../screens/NotFound"
import "./bulletin.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Bulletin() {
    return (
        <div className="bulletin">
            <h2>Bulletin</h2>
            <Router>
                <Switch>
                    <Route exact path="/">
                    <BlogList/>
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
