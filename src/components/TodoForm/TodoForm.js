import React from 'react';

class TodoForm extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <form>
          <input type="text" placeholder="Todo"/>
          <button type="submit">swag</button>
        </form>
    );
  }

}

export default TodoForm;
