import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

// 共有模版
const DefaultLayout = lazy(() => import('./container/defaultLayer'))

// 基礎頁面
const Login = lazy(() => import('./views/account/login.jsx'))
const Register = lazy(() => import('./views/account/register.jsx'))
const View404 = lazy(() => import('./views/Others/404'))

function App() {
  return (
    <Router>
      <Suspense fallback={() => <span>Loading</span>}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/404" exact component={View404} />
          <Route component={DefaultLayout} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
