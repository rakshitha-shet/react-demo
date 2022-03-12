import React, {useState, useEffect} from "react";
export const UEffect = () => {
    const [count, setCount] = useState(0);
    const [ name, setName] = useState("pop");
    useEffect(() => {
        console.log('updated ===>');
        document.title = `clicked ${count} times`
    }, [count])

    return(<>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick={()=> setCount((prev) => prev + 1)}>Clicked {count} title document ******</button>
    </>)
}
