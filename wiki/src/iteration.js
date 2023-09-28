import Sidebar from "./sidebar";
import React from "react";
import Highlight from "react-highlight";
import "./style.css"
import { Link } from "react-router-dom";
import CodeSnippet from "./codesnippet";

function Iteration() {





    return (
        <>


            <div className="main">

                <h1>Python iteration</h1>

                <h2>python for loops</h2>

                <p>A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</p>

                <p>This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</p>

                <p>With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.</p>



                <CodeSnippet CodeStr={'for i in range(5):\n   print(i)'}></CodeSnippet>
                <p>the previous example uses indexing however there is another way to loop through a list like this : </p>
                <CodeSnippet CodeStr={'MyList = [1,2,3,4,5,6,7,8,9,10]\nfor num in MyList:\n    print(num)'}></CodeSnippet>

                <p>however the previous example has a flaw being you cant keep track of the index enumeration solves this problem as shown below</p>
                <CodeSnippet CodeStr={'MyList = [2,4,6,8,10,12,14]\nfor index,num in enumerate(MyList):\n    print(index,num)'}></CodeSnippet>
                <p>using enumerate return both the element and the index completely avoiding having to use indexes </p>
                



            </div>
            <Sidebar></Sidebar>
        </>
    )
}

export default Iteration;