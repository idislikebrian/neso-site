import "./topbar.scss"
import { Link } from 'react-router-dom';
import logo from "../../images/NESO-02.png";

export default function Topbar() {
    return (
        <div className="topbar">
            <Link to="/"><img src= {logo} alt="Logo" /></Link>
            <h1>Non-Existent Space Organization</h1>
            <div className="links">
                <Link to="/create">Create</Link>
            </div>
        </div>
    )
}
