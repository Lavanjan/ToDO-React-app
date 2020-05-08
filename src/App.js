import React, { Component, Fragment } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { v4 as uuid } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/pages/About';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id
        !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
