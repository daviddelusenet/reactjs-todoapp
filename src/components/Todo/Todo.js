import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styles from './Todo.scss';

class Todo extends React.Component {

  constructor() {
    super();

    // Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidUpdate() {
    if (this.todo.classList.contains(styles['Todo--being-edited'])) {
      this.todo.classList.remove(styles['Todo--being-edited']);
    }
  }

  handleChange() {
    this.props.toggleDone(this.props.todo.id, this.checkbox.checked);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleEdit() {
    this.todo.classList.add(styles['Todo--being-edited']);
  }

  handleUpdate(e) {
    if (e.keyCode == 13) {
      this.props.updateTodo(this.props.todo.id, this.input.value);
    }
  }

  render() {

    //<CSSTransitionGroup
    //  transitionName={{
    //      enter: styles['Todo--enter'],
    //      enterActive: styles['Todo--enter-active'],
    //      leave: styles['Todo--leave'],
    //      leaveActive: styles['Todo--leave-active']
    //    }}
    //  transitionEnterTimeout={500}
    //  transitionLeaveTimeout={300}>
    //  <li styleName="Todo" ref={(li) => {this.todo = li}}>
    //    <input styleName="Todo-checkbox" type="checkbox" ref={(checkbox) => {this.checkbox = checkbox}} onChange={this.handleChange} checked={this.props.todo.done} />
    //    <input styleName="Todo-input" ref={(input) => {this.input = input}} defaultValue={this.props.todo.text} onKeyDown={this.handleUpdate}></input>
    //    <span styleName="Todo-text" onDoubleClick={this.handleEdit}>{this.props.todo.text}</span>
    //    <span styleName="Todo-delete" onClick={this.handleDelete}>&#10006;</span>
    //  </li>
    //</CSSTransitionGroup>

    return(
      <li styleName="Todo" ref={(li) => {this.todo = li}}>
        <input styleName="Todo-checkbox" type="checkbox" ref={(checkbox) => {this.checkbox = checkbox}} onChange={this.handleChange} checked={this.props.todo.done} />
        <input styleName="Todo-input" ref={(input) => {this.input = input}} defaultValue={this.props.todo.text} onKeyDown={this.handleUpdate}></input>
        <span styleName="Todo-text" onDoubleClick={this.handleEdit}>{this.props.todo.text}</span>
        <span styleName="Todo-delete" onClick={this.handleDelete}>&#10006;</span>
      </li>
    );
  }

}

export default Todo;
