import React from 'react';
import ReactDOM from 'react-dom'
import App from '../App';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App posts={state.postsPage.posts} dialogs={state.dialogs} messages={state.messages}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}