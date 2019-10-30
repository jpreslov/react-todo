import React, { Component } from "react";
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
state = {
  todos: [
    {
      id: uuid.v4(),
      title: 'Take out the trash',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Dinner with wife',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Catch the big game',
      completed: false
    }
  ]
}

markComplete = (id) => {
this.setState({ todos: this.state.todos.map(todo=> {
  if(todo.id === id){
    todo.completed = !todo.completed
  }
  return todo;
}) })}

//Delete Todo
delTodo = (id) => {
this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})}

//Add todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] })
};


  render() {
    return (
      <div className="App">
        <div className='container'>
        <Header style={headerStyle}/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo}/>
        </div>
      
      </div>
    );
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default App;
