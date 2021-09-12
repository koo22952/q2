import React from 'react'
import ReactDOM from 'react-dom'

/*
todo
  雙層圈漸變
  時間差漸變
 */
function Loading() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16">
        <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4">
          <span className="animate-ping absolute h-full w-full rounded-full bg-blue-500" />
        </span>
      </div>
      <div className="h-full w-full bg-gray-200 opacity-20" />
    </>
  )
}

function createLoading(type) {
  const el = document.getElementById('loading')
  if (type === 'start' && el === null) {
    const div = document.createElement('div')
    div.id = 'loading'
    div.className = 'absolute inset-0'
    document.body.appendChild(div)
    ReactDOM.render(<Loading />, div)
  }
  if (type === 'end' && el !== null) {
    const removeDiv = document.getElementById('loading')
    if (removeDiv === null) return
    removeDiv.remove()
  }
}

export default {
  start: () => createLoading('start'),
  end: () => createLoading('end'),
}
