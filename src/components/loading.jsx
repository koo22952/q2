import React from 'react'
import ReactDOM from 'react-dom'

function Loading(props) {
  return (
    <>
      <div className="absolute h-3 w-3 ">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
      </div>
      <div className="h-full w-full bg-gray-200 opacity-20" />
    </>
  )
}

function createLoading(type) {
  if (type === 'start') {
    const div = document.createElement('div')
    div.id = 'loading'
    div.className = 'absolute inset-0'
    document.body.appendChild(div)
    ReactDOM.render(<Loading />, div)
  }
  if (type === 'end') {
    const removeDiv = document.getElementById('loading')
    if (removeDiv === null) return
    removeDiv.remove()
  }
}

export default {
  start: () => createLoading('start'),
  end: () => createLoading('end'),
}
