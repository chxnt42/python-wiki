import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="test">
            <Link to="/">home</Link>
            <Link to="/variables">variables</Link>
            <Link to="/datatypes">data types</Link>
            <Link to="/comments">comments</Link>
            <Link to="/lists">lists</Link>
            <Link to="/iteration">iteration</Link>
            <Link to="/dictionaries">dictionaries</Link>
            
            
        </div>
    )
}

export default Sidebar;