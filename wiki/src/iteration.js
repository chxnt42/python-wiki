import Sidebar from "./sidebar";
import React from "react";
import Highlight from "react-highlight";
import Coderun from "./coderun";
import "./style.css"



function Iteration(){
    

  


    return(
        <>


        <div className="main">

        <h1>Python iteration</h1>

        <h2>python for loops</h2>

        <p>A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</p>

        <p>This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</p>

        <p>With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.</p>

   
        
        <Highlight className="python">
            {
                'for i in range(5):\n   print(i)'
            }
        </Highlight>
        
        <Coderun code={'for i in range(5):\n    if i % 2 == 0:\n        print(i)'}></Coderun>

        </div>
        <Sidebar></Sidebar>
        </>
    )
}

export default Iteration;