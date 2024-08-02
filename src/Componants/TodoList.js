import React from "react";
import '../index.css'


const TodoList=(props)=>{
    
    return (
    <>
    <div className="todo_style">
    <i className="fa-solid fa-xmark" onClick={()=>{
        props.onSelect(props.id)
    }}></i>
        <li>{props.text}</li>
    </div>
    </>
    )
};

export default TodoList;