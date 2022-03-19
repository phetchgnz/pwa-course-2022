import { useState } from "react";
import './TestState.css';

function TestState() {
    const [size, setSize] = useState ("small");

    function changeSize(){
        if(size === "small"){
            setSize("medium");
        } if (size === "medium"){
            setSize("large");
        } if (size === "large"){
            setSize("small");
        }
    }

    return (
        <div>
            <input type="button" value="Click me" onClick={changeSize}/>
            <div className={"circle" +size}/>
        </div>
    )
}

export default TestState;