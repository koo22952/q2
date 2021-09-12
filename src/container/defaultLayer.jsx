import React, { Suspense, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { routes } from '@/routes'
import Header from '@/container/header'
import Aside from '@/container/aside'


function DefaultLayer(props) {
  const history = useHistory()
  let auth = localStorage.getItem('userToken') || ''

  useEffect(() => {
    const isLogin = () => {
      if (!auth) {
        history.push('/login')
      }
    }
    isLogin()
  }, [])

  return (
    // 內高度由組件自行決定 父flex / 子flex1 撐滿
    <div className='w-full h-screen flex flex-col'>
      <Header />
      {/*開：ml-32 闔：ml-14*/}
      <div className='flex flex-1'>
        <Aside />
        <div className='flex-1'>
          <Suspense fallback={() => <span>Loading</span>}>
            <Switch>
              {routes.map((r) => {
                return (
                  <Route
                    key={r.path}
                    path={r.path}
                    exact={r.exact}
                    render={(props) => {
                      return <r.component {...props} />
                    }}
                  />
                )
              })}
              {/*無匹配重導項位置*/}
              <Redirect to='/404' />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayer
