import Sidebar from "./sidebar";
import { useEffect } from "react";
import React from "react";
import Highlight from "react-highlight";


function Home(){

    
    return(
        <>
        
        <div className="main">
            
            <h1>Python Introduction</h1>


            <h2>what is python?</h2>

            <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>

            <p>it is used for:</p>
            <ul>
                <li>web development</li>
                <li>software development</li>
                <li>mathematics</li>
                <li>system scripting</li>
            </ul>

            <h3>What can python do?</h3>
            <ul>
                <li>web development</li>
                <li>software development</li>
                <li>mathematics</li>
                <li>system scripting</li>
            </ul>


            <p>example : </p>
            <Highlight className='python'>
            {"print('hello world')"}</Highlight>
                                
        </div>

        <Sidebar></Sidebar>
        </>
        
    
    )
}

export default Home;