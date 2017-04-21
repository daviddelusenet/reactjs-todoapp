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
// This does work now!!
if (module.hot) {
  module.hot.accept('./components/TodoApp', () => {
    render(TodoApp)
  });
}

// This also works
//if(module.hot) {
//  module.hot.accept('./components/TodoApp', () => {
//    const NextApp = require('./components/TodoApp').default;
//    render(NextApp);
//  });
//}

// And this also works
//if(module.hot) {
//  module.hot.accept();
//}
