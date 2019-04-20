import React, { Component } from 'react';
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import TodoItem from '../components/TodoItem';
import TodoAddItems from '../components/TodoAddItems';
export default function Dash(props){
    
        return <div>
                <TodoAddItems state={props.state.currentTodo} handleRenderAllTasks={props.handleRenderAllTasks} handleRenderToDoTasks ={props.handleRenderToDoTasks} handleRenderCompletedTasks ={props.handleRenderCompletedTasks}onInputChange = {props.handleInputChange} onAddTodo={props.handleAddTodo}></TodoAddItems>
                <ul>
                {props.state.todoes.map(item => (
                <TodoItem item={item} onCheckTodo = {props.onCheckTodo} onDeleteTodo={props.onDeleteTodo}></TodoItem>
                ))}
                </ul>
            </div>
        
    
}