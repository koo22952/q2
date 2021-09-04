import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

// 共有模板
const DefaultLayout = lazy(() =>
  import(/* webpackChunkName: 'default' */ './container/defaultLayer')
)

// 基礎頁面
const Login = lazy(() =>
  import(/*webpackChunkName: login */ './views/login/login.jsx')
)
const Register = lazy(() =>
  import(/*webpackChunkName: Register */ './views/login/register.jsx')
)
const View404 = lazy(() =>
  import(/* webpackChunkName: '404' */ './views/Others/404')
)

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/news">news</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
      </ul>
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
