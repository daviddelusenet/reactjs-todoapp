import React from 'react';
import Todo from '../Todo/Todo';
import TodosAreLoading from '../TodosAreLoading/TodosAreLoading';
import './TodoList.scss';

class TodoList extends React.Component {

  render() {
    return(
      <ul styleName="TodoList">
        {this.props.loading ? (
            <TodosAreLoading />
          ) : (
            this.props.todos.map((object, key) =>
              <Todo key={key} id={key} deleteTodo={this.props.deleteTodo} toggleDone={this.props.toggleDone} updateTodo={this.props.updateTodo} todo={object} />
            )
        )}
      </ul>
    );
  }

}

export default TodoList;
