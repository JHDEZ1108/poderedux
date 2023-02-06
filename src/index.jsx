import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { logger } from './middlewares';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
)

const store = createStore(rootReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

