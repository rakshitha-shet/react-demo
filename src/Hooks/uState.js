import React, { useState } from "react";

export const UState = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const [name, setName] = useState({fname: "", lname: ""})
    return (
        <>  
            <input type="text" value={name.fname} onChange={(e) => setName({...name, fname:e.target.value})}/>
            <input type="text" value={name.lname} onChange={(e) => setName({...name, lname:e.target.value})}/>
            <h1>{name.fname}</h1>
            <h1>{name.lname}</h1>
            <button onClick={() => setItems([...items, Math.floor(Math.random()*10)])}> Add item</button>
            {items.map((item, index) => <li key={index}>{item}</li>)}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
        </>
    )
}