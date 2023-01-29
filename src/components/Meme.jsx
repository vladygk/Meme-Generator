import React,{useState} from "react"
import "../styles/Meme.scss"

export default function Meme(props){

    function enterHandler(event){
        event.target.src = props.altUrl;
    }
    function exitHandler(event){
        event.target.src = props.url;
    }
    return <>
    <div className="meme-container">
        <h2 id="top" className="text">Nickname: {props.top} 🥳</h2>
        <img onMouseLeave={exitHandler} onMouseEnter={enterHandler} src={props.url}  />
        <h3 id="name" className="text">{props.name}</h3>
        <h2 id="bottom" className="text">Town:{props.bottom} 🌇</h2>
    </div>
    </>
}