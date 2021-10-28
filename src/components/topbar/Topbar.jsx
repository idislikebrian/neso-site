import "./topbar.scss"
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <h1>Non-Existent Space Organization</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </div>
    )
}
