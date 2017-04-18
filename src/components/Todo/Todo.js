import React from 'react';
import Styles from './Todo.scss';

class Todo extends React.Component {

  constructor() {
    super();

    // Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange() {
    this.props.toggleDone(this.props.todo.id, this.checkbox.checked);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleEdit() {
    this.todo.classList.add(Styles['Todo--being-edited']);
  }

  handleUpdate(e) {
    if (e.keyCode == 13) {
      const done = this.props.updateTodo(this.props.todo.id, this.input.value);

      if (done) {
        this.todo.classList.remove(Styles['Todo--being-edited']);
      }
    }
  }

  render() {
    return(
        <li styleName="Todo" ref={(li) => {this.todo = li}}>
          <input styleName="Todo-checkbox" type="checkbox" ref={(checkbox) => {this.checkbox = checkbox}} onChange={this.handleChange} checked={this.props.todo.done} />
          <input styleName="Todo-input" ref={(input) => {this.input = input}} defaultValue={this.props.todo.text} onKeyDown={this.handleUpdate}></input>
          <span styleName="Todo-text" onDoubleClick={this.handleEdit}>{this.props.todo.text}</span>
          <span styleName="Todo-delete" onClick={this.handleDelete}>x</span>
        </li>
    );
  }

}

export default Todo;
