import React, { Suspense, lazy, useState } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Header from './header'
import { routes } from '../routes'

function DefaultLayer(props) {
  return (
    <>
      <div>
        <Header />
        <div>
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
              {/*無匹配重導項位置。*/}
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default DefaultLayer
