import React, { useState } from 'react'

function button() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Plus</button>
            <p>Count:- {count}</p>
            <button onClick={()=>setCount(count-1)}>Minus</button>
        </div>
    )
}

export default button
