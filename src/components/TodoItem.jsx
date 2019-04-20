import React, { Component } from 'react';
export default function TodoItem(props){
    return(
        <li style={{backgroundColor:'red'}}>
        <input type="checkbox" checked={props.item.completed}  onChange= {props.onCheckTodo(props.item)}/>
        <span> {props.item.title} </span>
        <button onClick= {props.onDeleteTodo(props.item)}>x</button>

      </li>
    );
}