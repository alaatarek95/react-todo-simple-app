import React, { Component } from 'react';

import {getTodos}  from '../src/components/todoListService';
import Home from '../src/routers/Home';
import Dash from '../src/routers/Dash';

import { Router, Link } from "@reach/router"


export default class App extends Component {
  state = {
    currentTodo: '',
    todoes:[{
      id: Math.random(), title: "alaa", completed: false
    }]
  };

  componentDidMount(){
    getTodos().then(
      data =>{
        this.setState({
          todoes:data
        })
      }
    )
  }
  handleRenderCompletedTasks = event=>{
    getTodos().then(
      data =>{
        this.setState({
          todoes:data.filter((data)=>{
            if(data.completed === true)
            return data
        }),
        })
      }
    )
  }
  handleRenderToDoTasks = event=>{
    getTodos().then(
      data =>{
        this.setState({
          todoes:data.filter((data)=>{
            if(data.completed === false)
            return data
        }),
        })
      }
    )
  }
  
  handleRenderAllTasks = event=>{
    getTodos().then(
      data =>{
        this.setState({
          todoes:data
        })
      }
    )
  }

  handleAddTodo = event => {
    this.setState({
      currentTodo:'',
      todoes: this.state.todoes.concat({
        id:Math.random(),
        title: this.state.currentTodo,
        completed:false,
      }),
    })
  };
  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({
      currentTodo:event.target.value,
    });
  };
  handleDeleteTodo = item =>event => {
    this.setState({
      currentTodo : '',
      todoes: this.state.todoes.filter(i => i.id !== item.id),
    });
  };
  handleCheckTodo = item =>event => {
    this.setState({
      currentTodo : '',
      todoes: this.state.todoes.map(i=>{
        if(i.id === item.id){
          i.completed= !i.completed;

        }
        return i;
      }),
    });
  };
  
  render() {
    return (
      
      <div>
        <Router>
        <Home path="/" />
        <Dash path="dashboard" state={this.state} handleRenderAllTasks={this.handleRenderAllTasks} handleRenderToDoTasks ={this.handleRenderToDoTasks} handleRenderCompletedTasks ={this.handleRenderCompletedTasks}onInputChange = {this.handleInputChange} onAddTodo={this.handleAddTodo} 
        onCheckTodo = {this.handleCheckTodo} onDeleteTodo={this.handleDeleteTodo}/>
      </Router>
       
      </div>  
    );
  }
}

