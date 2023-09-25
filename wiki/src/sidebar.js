import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="test">
            <Link to="/">home</Link>
            <Link to="/iteration">iteration</Link>
            <Link to="/comments">comments</Link>
            <Link to="/variables">variables</Link>
        </div>
    )
}

export default Sidebar;