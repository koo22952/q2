import React, { Suspense, lazy, useState } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Header from './header'
import { routes } from '../routes'

function DefaultLayer(props) {
  return (
    // 內高度由組件自行決定 父flex / 子flex1 撐滿
    <div className="w-full h-screen flex flex-col">
      <Header />
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
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </div>
  )
}

export default DefaultLayer
