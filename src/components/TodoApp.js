import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import base from './../base';
import './TodoApp.scss';

class TodoApp extends React.Component {

  constructor() {
    super();
    console.info("Init TodoApp");

    // Bind functions
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

    // Set initial state
    this.state = {
      todos: [],
      loading: true
    };
  }

  componentWillMount() {

    this.ref = base.syncState('/', {
      context: this,
      state: 'todos',
      asArray: true,
      then() {
        this.setState({
          loading: false
        });
      }
    });

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTodo(value) {
    // copy state
    const todos = this.state.todos.slice(0);

    // setup new todo object
    const todo = {
      'text': value,
      'id': Date.now(),
      'done': false
    };

    // add new todo to copy of todos
    todos.push(todo);

    // distribute updated todos
    this.setState({ todos });
  }

  deleteTodo(todoId) {
    // copy state
    const todos = this.state.todos.slice(0);

    // loop over todos array
    todos.map((object, key) => {
      // check if id's are equal, if so remove the todo
      if (todoId == object.id) {
        todos.splice(key, 1);
      }
    });

    // distribute updated todos
    this.setState({ todos });
  }

  toggleDone(todoId, done) {
    // copy state
    const todos = this.state.todos.slice(0);

    // loop over todos array
    todos.map((todo, key) => {
      // check if id's are equal, if so remove the todo
      if (todoId == todo.id) {
        todo.done = done;
      }
    });

    // distribute updated todos
    this.setState({ todos });
  }

  updateTodo(todoId, newValue) {
    // copy state
    const todos = this.state.todos.slice(0);

    // loop over todos array
    todos.map((todo, key) => {
      // check if id's are equal, if so update the todo
      if (todoId == todo.id) {
        todo.text = newValue;
      }
    });

    // distribute updated todos
    this.setState({ todos });
  }

  render() {
    return(
        <div styleName="TodoApp">
          <TodoForm addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} loading={this.state.loading} deleteTodo={this.deleteTodo} toggleDone={this.toggleDone} updateTodo={this.updateTodo} />
        </div>
    );
  }

}

export default TodoApp;
