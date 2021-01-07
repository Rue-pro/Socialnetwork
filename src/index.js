import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'


export let rerenderEntireTree = () => {
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(() => rerenderEntireTree())
serviceWorker.unregister();