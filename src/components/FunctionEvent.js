import React from 'react'

const FunctionEvent = () => {
    function handleClick(){
        console.log("Button Clicked");
    }
    
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FunctionEvent
