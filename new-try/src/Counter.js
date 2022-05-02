import React, { useState } from "react";

function Counter(props){

    const [count, setCount] = useState(props.count);

    function add(){
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Counter
