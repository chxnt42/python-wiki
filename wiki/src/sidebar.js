import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="test">
            <Link to="/">home</Link>
            <Link to="/iteration">iteration</Link>
            <a href="#">comments</a>
        </div>
    )
}

export default Sidebar;