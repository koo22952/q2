import React, { Suspense, lazy } from 'react'

const Home = lazy(() => import('@/views/home'))
const News = lazy(() => import('@/views/news'))
const Users = lazy(() => import('@/views/users'))
const Setting = lazy(() => import('@/views/account/setting'))

export const routes = [
  { path: '/home', exact: true, component: Home },
  { path: '/user/setting', exact: true, component: Setting },
  { path: '/users', exact: true, component: Users },

]
