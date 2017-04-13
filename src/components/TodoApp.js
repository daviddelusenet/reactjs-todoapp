import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

class TodoApp extends React.Component {

  constructor() {
    super();
    console.info("Init TodoApp");

    this.state = {
      todos: []
    }
  }

  render() {
    return(
        <div>
          <TodoForm />
          <TodoList />
        </div>
    );
  }

}

export default TodoApp;
