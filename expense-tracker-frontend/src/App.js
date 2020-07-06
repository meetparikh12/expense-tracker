import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
}

export default App;
