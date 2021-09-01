import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './views/login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>
            <Login />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
