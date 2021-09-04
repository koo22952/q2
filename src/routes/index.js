import React, { Suspense, lazy } from 'react'

const Home = lazy(() =>
  import(/*webpackChunkName: Home */ '../views/home/index.jsx')
)
const News = lazy(() => import(/*webpackChunkName: News */ '../views/news'))

export const routes = [
  { path: '/home', exact: true, component: Home },
  { path: '/news', exact: true, component: News },
]
