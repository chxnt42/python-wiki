import { useState } from "react";



function Coderun(props)
{

    const [result,setResult] = useState(props.code);

    const handleclick = () =>{
        fetch("http://127.0.0.1:5000/test",{
        method : "POST",
        body: JSON.stringify({code:props.code})
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data.res.join(""))
                setResult(data.res.join(""))
            }
        )
    }

    return(
        <>
    <div className="coderun">
        <pre>{result}</pre>
    </div>
    <button onClick={handleclick}>run</button>
    </>
    )
    
}

export default Coderun;