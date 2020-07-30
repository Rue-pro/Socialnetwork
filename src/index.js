import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
serviceWorker.unregister();
