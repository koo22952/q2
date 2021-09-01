import { setupMSW } from './mocks/browser'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

setupMSW().then(() =>
  ReactDOM.render(<App />, document.getElementById('root'))
)
