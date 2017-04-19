import React from 'react';
import './TodoForm.scss';

class TodoForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();

    if (this.todo.value != '') {
      this.props.addTodo(this.todo.value);
      this.form.reset();
    }
  }

  render() {
    return(
        <form ref={(form) => this.form = form} onSubmit={(e) => this.handleSubmit(e)} styleName="TodoForm">
          <input ref={(input) => this.todo = input} type="text" placeholder="What do you want" styleName="TodoForm-input" />
          <button type="submit" styleName="TodoForm-button">Add</button>
        </form>
    );
  }

}

export default TodoForm;
