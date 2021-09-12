import React from 'react'
import ReactDOM from 'react-dom'
import Error from '@/assets/error'
import Success from '@/assets/successful'

/*
todo
  缺乏向下移動的問題，toast 只堆疊在同一個地方
  color 呈現方式很醜
  useEffect & useState 無法使用
  可以試試看 Frank 作法
  1. toast 實現方式
  2. className 的產生方式，帶入物件
*/

function Notice({ type, msg }) {
  const icons = () => {
    switch (type) {
      case 'success':
        return <Success />
      case 'error':
        return <Error />
      default:
        return null
    }
  }
  return (
    <div className="flex justify-center bg-white fixed left-1/2 top-0 transform -translate-x-1/2 mt-3">
      <div
        className={`flex items-center border-l-4 border-${
          type === 'success' ? 'green' : 'red'
        }-700 py-2 px-3 shadow-md`}
      >
        <div
          className={`text-${
            type === 'success' ? 'green' : 'red'
          }-500 rounded-full bg-white mr-3`}
        >
          {icons(type)}
        </div>
        <div className="max-w-xs ">{msg}</div>
      </div>
    </div>
  )
}

function createNotification(type = 'success', msg = '', duration = 2) {
  const div = document.createElement('div')
  div.id = 'toast'
  document.body.appendChild(div)

  ReactDOM.render(<Notice type={type} msg={msg} />, div)

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
  }, duration * 1000)
}

export default {
  success: (msg, duration) => createNotification('success', msg, duration),
  error: (msg, duration) => createNotification('error', msg, duration),
}
