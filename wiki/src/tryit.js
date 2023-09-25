import React from "react";
import Sidebar from "./sidebar"
import { createRef, useState } from "react";
import { useLocation } from "react-router-dom";

function Tryit(props) {
    const [result, setResult] = useState("");
    const location = useLocation();
    const data = location.state.data;

    let myref = React.createRef();

    console.log(data);

    const handleclick = () => {
        fetch("http://127.0.0.1:5000/test", {
            method: "POST",
            body: JSON.stringify({ code: myref.current.value })
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data.res.join(""))
                setResult(data.res.join(""))
            }
        )
    }

    const handleKeyDown = (event) => { //this function was pillaged online and allows users to press tab in a text area 
        if (event.key == 'Tab') {
            event.preventDefault();
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;
            event.target.value = event.target.value.substring(0, start) + '    ' + event.target.value.substring(end);
            event.target.selectionStart = event.target.selectionEnd = start + 4;
        }
    }



    return (
        <>
            <div className="main">
                <button id="btn" onClick={handleclick}>run</button>
                <div className="edit">
                    <textarea className="CodeEdit" spellCheck={false} ref={myref} onKeyDown={handleKeyDown}>{data}</textarea>
                    <pre className="output">{result}</pre>
                </div>

            </div>

            <Sidebar></Sidebar>
        </>
    )
}

export default Tryit;