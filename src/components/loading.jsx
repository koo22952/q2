import React from 'react'
import ReactDOM from 'react-dom'

function Loading(props) {
  return <div>1234654</div>
}

function createLoading(type) {
  if (type === 'start') {
    const div = document.createElement('div')
    div.id = 'loading'
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
