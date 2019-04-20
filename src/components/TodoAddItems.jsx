
import React, { Component } from 'react';
export default function TodoAddItems(props){
    return(
        <>
        <div>
            <button  onClick={props.handleRenderCompletedTasks} >Completed</button>
            <button  onClick={props.handleRenderToDoTasks} >Todo</button>
            <button  onClick={props.handleRenderAllTasks} >All</button>
        </div>
        <input type ="text" onChange={props.onInputChange} value={props.state} />
        <button onClick ={props.onAddTodo}>Add</button>
        </>
    );
}