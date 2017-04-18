import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
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

    // Set state + todos
    this.state = {
      todos: []
    };

    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  componentWillMount() {

    // check if there were todos in the localStorage
    if (this.todos.length > 0) {
      // distribute updated todos array
      this.updateState();
    }

  }

  addTodo(value) {
    // setup new todo object
    const todo = {
      'text': value,
      'id': Date.now(),
      'done': false
    };

    // add new todo to todos array
    this.todos.push(todo);
    // distribute updated todos array
    this.updateState();
  }

  deleteTodo(todoId) {
    // loop over todos array
    this.todos.map((object, key) => {
      // check if id's are equal, if so remove the todo
      if (todoId == object.id) {
        this.todos.splice(key, 1);
      }
    });

    // distribute updated todos array
    this.updateState();
  }

  toggleDone(todoId, done) {
    // loop over todos array
    this.todos.map((todo, key) => {
      // check if id's are equal, if so remove the todo
      if (todoId == todo.id) {
        todo.done = done;
      }
    });

    // distribute updated todos array
    this.updateState();
  }

  updateTodo(todoId, newValue) {
    // loop over todos array
    this.todos.map((object, key) => {
      // check if id's are equal, if so update the todo
      if (todoId == object.id) {
        this.todos[key].text = newValue;
      }
    });

    // distribute updated todos array
    this.updateState();

    return true;
  }

  updateState() {
    // add todos to localStorage
    localStorage.setItem('todos', JSON.stringify(this.todos));

    // update the state with the new todos
    this.setState((prevState, props) => ({
      todos: this.todos
    }));
  }

  render() {
    return(
        <div styleName="TodoApp">
          <TodoForm addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} toggleDone={this.toggleDone} updateTodo={this.updateTodo} />
        </div>
    );
  }

}

export default TodoApp;
