import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
  {
    content: "Post 1",
    likesCount: 1
  },{
    content: "Post 2",
    likesCount: 18
  }
]
let dialogs = [
  {
    name: "я",
    id: "1"
  },{
    name: "ты",
    id: "2"
  }
]
let messages = [
  {
    user_id: 1,
    message: "Сообщение 1"
  },{
    user_id: 2,
    message: "Сообщение 1"
  },{
    user_id: 1,
    message: "Сообщение 2"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
