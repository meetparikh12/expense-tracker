import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/UserManagement/Login/Login'
import Register from './pages/UserManagement/Register/Register'

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
