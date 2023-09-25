import { Link } from "react-router-dom";
import Highlight from "react-highlight";


export default function CodeSnippet({ CodeStr }) {
    return (
        <>
            <div className="SnippetContainer">
                <Highlight className="python">
                    {
                        CodeStr
                    }
                </Highlight>

                <Link to="/sandbox" state={{ data: CodeStr }} className="trybtn">try!</Link>
            </div>

        </>
    )
}