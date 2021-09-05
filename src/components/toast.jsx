import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Error from '../assets/error'
import Success from '../assets/successful'
import { green } from 'tailwindcss/colors'

// export const ToastSuccess = (msg) => {
//   return (
//     <div className="flex justify-center bg-white fixed left-1/2 top-0 transform -translate-x-1/2 mt-3">
//       <div className="flex items-center border-l-4 border-green-700 py-2 px-3 shadow-md">
//         <div className="text-green-500 rounded-full bg-white mr-3">
//           <Success />
//         </div>
//         <div className="max-w-xs ">{msg}</div>
//       </div>
//     </div>
//   )
// }
//
// export const ToastError = (msg) => {
//   return (
//     <div className="flex justify-center bg-white fixed left-1/2 top-0 transform -translate-x-1/2 mt-3">
//       <div className="flex items-center border-l-4 border-red-700 py-2 px-3 shadow-md">
//         <div className="text-red-500 rounded-full bg-white mr-3">
//           <Error />
//         </div>
//         <div className="max-w-xs ">{msg}</div>
//       </div>
//     </div>
//   )
// }

const styleType = {
  success: 'green',
  error: 'red',
}

function Toast({ type = 'success', msg, isActive = false }) {
  return (
    <div
      className={`flex justify-center bg-white fixed left-1/2 top-0 transform -translate-x-1/2 mt-3 ${
        isActive ? '' : 'hidden'
      }`}
    >
      <div
        className={`flex items-center border-l-4 border-${styleType[type]}-700 py-2 px-3 shadow-md`}
      >
        <div
          className={`text-${styleType[type]}-500 rounded-full bg-white mr-3`}
        >
          <Success />
        </div>
        <div className="max-w-xs ">{msg}</div>
      </div>
    </div>
  )
}

export default Toast
