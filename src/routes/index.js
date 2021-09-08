import React, { Suspense, lazy } from 'react'

const Home = lazy(() => import('../views/home/index.jsx'))
const News = lazy(() => import('../views/news'))

export const routes = [
  { path: '/home', exact: true, component: Home },
  { path: '/news', exact: true, component: News },
]
