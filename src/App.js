import React, { Component, Fragment } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { v4 as uuid } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.setState({ todos: res.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id
          !== id)]
      }));
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',
      {
        title,
        completed: false
      })
      .then(res => this.setState({
        todos:
          [...this.state.todos, res.data]
      }));
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
