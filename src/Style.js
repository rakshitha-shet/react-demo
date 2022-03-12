import React from "react";
import "./myApp.css";
import style from "./myApp.module.css";

export default function Style (props) {
    const name = props.pop ? props.pop : "success";
    return (<div>
        <h1 style={{color: "green", fontSize: "50px"}}> Inline</h1>
        <h1 className={name}> CSS STyle sheet</h1>
        <h1 className={style.def}> CSS module style</h1>
    </div>)
}
