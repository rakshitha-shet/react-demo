import React from "react";

export default function Child(props) {
    return <button onClick={() => props.handleChild("rakshitha")}>Click Me</button>
}