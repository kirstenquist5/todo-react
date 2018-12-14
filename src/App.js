import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn Redux', complete: false }
    ]
  }

  addItem = (word) => {
    const { todos } = this.state;
    const todo = { id: this.getUniqId(), name: word, complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

  getUniqId = () => {
    return Math.floor((Math.random()) * 10000)
  }

  listItems = () => {
    const { todos } = this.state;
    return todos.map(todo => {
      return <Todo key={todo.id} {...todo} todoClick={this.todoClick} />
    })
  }

  todoClick = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <ul>
          {this.listItems()}
        </ul>
      </div>
    )
  }
}

export default App;
