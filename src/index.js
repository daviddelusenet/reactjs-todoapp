import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import './stylesheets/Stylesheets.scss';

const Root = () => {
  return(
      <TodoApp />
  );
};

ReactDOM.render(<Root/>, document.querySelector('#main'));
