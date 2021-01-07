import React, { Component } from 'react';
import s from'./App.module.css';
import { connect } from "react-redux"
import Menu from './components/Menu/Menu'
import { Route, NavLink, withRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {logout} from "./redux/authReducer"
import {initializeApp} from "./redux/appReducer"
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  componentDidMount () {
    this.props.initializeApp()
  }
  render () {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <Provider>
          <div className={s.app}>
            <header className={s.header}>
              <div className={s.login}>
                {this.props.login !== null ? <div><div>{this.props.login}</div><button onClick={this.props.logout}>Logout</button></div>: <NavLink to="/login">Login</NavLink>}
              </div>
              <img alt="flowers" src="https://cdn.pixabay.com/photo/2020/07/21/08/49/plant-5425642_960_720.jpg" />
            </header>
            <div className={s.content_wrapper}>
              <div className={s.aside}>
                <Menu />
              </div>
              <div className={s.content}>
                <Route path="/profile/:userId?" render={()=><ProfileContainer />}/>
                <Route path="/dialogs" render={()=><DialogsContainer />}/>
                <Route path="/users" render={()=><UsersContainer />}/>
                <Route path="/login" render={()=><Login />}/>
              </div>
            </div>
          </div>
          </Provider>
      </BrowserRouter>
    )
  }
}
let mstp = (state) => {
  return {
    login: state.auth.login,
    initialized:state.app.initialized
  }
}
export default compose(
  withRouter,
  connect(mstp, {initializeApp, initializeApp, logout}))(App)
