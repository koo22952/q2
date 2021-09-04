import React, { useState } from 'react'
import EyesOff from '../assets/eyes-off'
import EyesOn from '../assets/eyes-on'

function Input({
  className,
  label,
  placeholder = '',
  htmlType,
  InputType,
  showEye = false,
}) {
  const [look, setLook] = useState(false)

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <label className="mr-4" htmlFor={htmlType}>
        {label}
      </label>
      <input
        id={htmlType}
        type={InputType}
        className="relative appearance-none block flex-1 px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        placeholder={placeholder}
      />
      {showEye &&
        (look ? (
          <div
            className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setLook(!look)}
          >
            <EyesOn />
          </div>
        ) : (
          <div
            className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setLook(!look)}
          >
            <EyesOff />
          </div>
        ))}
    </div>
  )
}

export default Input
