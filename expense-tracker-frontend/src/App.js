import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/UserManagement/Login/Login'
import Register from './pages/UserManagement/Register/Register'
import jwt_decode from 'jwt-decode'
import setJwtToken from './components/shared/SecurityUtils/setJwtToken';
import {store} from './store/store'
import { SET_USER_INFO } from './actions/actionTypes';

const token = localStorage.getItem("jwt-token");
if (token) {
  const deocded_token = jwt_decode(token);
  setJwtToken(token);
  store.dispatch({
    type: SET_USER_INFO,
    payload: deocded_token
  })

  if (deocded_token.exp < Date.now() / 1000) {
    localStorage.removeItem("jwt-token");
    setJwtToken(false);
    store.dispatch({
      type: SET_USER_INFO,
      payload: {}
    })
    window.location.href = '/login';
  }
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
}

export default App;
