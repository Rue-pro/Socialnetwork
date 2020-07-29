import React from 'react';
import s from'./App.module.css';
import Menu from './components/Menu/Menu'
import { BrowserRouter, Route } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Dialogs from './components/Dialogs/Dialogs';
import { addPost } from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.app}>
        <header className={s.header}>
          <img alt="flowers" src="https://cdn.pixabay.com/photo/2020/07/21/08/49/plant-5425642_960_720.jpg" />
        </header>
        <div className={s.content_wrapper}>
          <div className={s.aside}>
            <Menu />
          </div>
          <div className={s.content}>
            {/* <Route component={Posts} exact path="/posts/"/>
            <Route component={Dialogs} path="/dialogs/"/> */}
            <Route path="/posts" render={()=><Posts posts={props.posts} addPost={addPost}/>}/>
            <Route path="/dialogs" render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
