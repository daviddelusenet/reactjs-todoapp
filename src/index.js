import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TodoApp from './components/TodoApp';
import './stylesheets/Stylesheets.scss';

const render = (Component) => {
  ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.querySelector('#main')
  );
};

render(TodoApp);

// Hot Module Replacement API
// This doesn't work
//if (module.hot) {
//  module.hot.accept('./components/TodoApp', () => {
//    render(TodoApp)
//  });
//}

// This does work
if(module.hot) {
  module.hot.accept('./components/TodoApp', () => {
    const NextApp = require('./components/TodoApp').default;
    render(NextApp);
  });
}

// This also works
//if(module.hot) {
//  module.hot.accept();
//}
