
import React from 'react'
import ReactDOM from "react-dom/client"

const Heading=()=>(
    <h1>Basha</h1>
)    

const a=10;
const Basha=()=>{
    return(
        <>
            <div>
        
            <Heading/>
            {console.log(5
            )}
                <h1>I want to learn ReactJS</h1>
                <p>I want to put more concentration on this.</p>
            </div>
            <ul>
                <li>learn Redux</li>
                <li>Learn Routing</li>
            </ul>
        </>
    )  
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Basha/>);