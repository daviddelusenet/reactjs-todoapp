import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.scss';

class TodoList extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <ul styleName="TodoList">
          {this.props.todos.map((object, key) => <Todo key={key} id={key} deleteTodo={this.props.deleteTodo} toggleDone={this.props.toggleDone} updateTodo={this.props.updateTodo} todo={object} />)}
        </ul>
    );
  }

}

export default TodoList;
