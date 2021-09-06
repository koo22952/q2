import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Error from '../assets/error'
import Success from '../assets/successful'

function Notice({ type, msg }) {
  switch (type) {
    case 'success':
      return (
        <div className="flex justify-center bg-white fixed left-1/2 top-0 transform -translate-x-1/2 mt-3">
          <div className="flex items-center border-l-4 border-green-700 py-2 px-3 shadow-md">
            <div className="text-green-500 rounded-full bg-white mr-3">
              <Success />
            </div>
            <div className="max-w-xs ">{msg}</div>
          </div>
        </div>
      )
    case 'error':
      return (
        <div className="flex justify-center bg-white fixed left-1/2 top-0 transform -translate-x-1/2 mt-3">
          <div className="flex items-center border-l-4 border-red-700 py-2 px-3 shadow-md">
            <div className="text-red-500 rounded-full bg-white mr-3">
              <Error />
            </div>
            <div className="max-w-xs ">{msg}</div>
          </div>
        </div>
      )
    default:
      return null
  }
}

let time

/*
  缺乏向下移動的問題，toast 只堆疊在同一個地方
*/
function createNotification(type, msg, duration = 2) {
  const div = document.createElement('div')
  div.id = 'toast'
  document.body.appendChild(div)

  ReactDOM.render(<Notice type={type} msg={msg} />, div)

  time = setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
  }, duration * 1000)
}

export default {
  success: (msg, duration) => createNotification('success', msg, duration),
  error: (msg, duration) => createNotification('error', msg, duration),
}
