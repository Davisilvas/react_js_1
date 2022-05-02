import React, { useEffect, useState } from "react";

function Counter(props){

    const [count, setCount] = useState(props.count);

    function add(){
        setCount(count + 1);
    }

    useEffect(()=>{
        setCount(parseInt(localStorage.getItem('count')))
    },[])

    useEffect(()=>{
        document.title = count; 
        localStorage.setItem('count', count);

    })

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Counter
