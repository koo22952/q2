import React, { useEffect, useState } from 'react'
import EyesOff from '../assets/eyes-off'
import EyesOn from '../assets/eyes-on'

/*
  className  整體外框可添加的 className
  label  label 名稱
  labelClassName  label 可添加的 className
  placeholder  input 的提示語
  name  label input ID 串聯的type & input 欄位名稱
  InputType  input 屬性
  showEye  是否呈現 密碼的眼睛（主要為密碼用）
  required 是否為必填
*/

function Input({
  className,
  label,
  labelClassName,
  placeholder = '',
  name,
  InputType,
  showEye = false,
  required = false,

  onChange,
  verify,
  isUse = false, //是否有輸入過
}) {
  const [look, setLook] = useState(false)

  return (
    <div className={`relative flex items-baseline w-full ${className}`}>
      {required && <span className="text-red-500">*</span>}
      <label className={`mr-4 ${labelClassName}`} htmlFor={name}>
        {label}
      </label>
      <div className="flex-1 relative">
        <div className="relative">
          <input
            id={name}
            type={showEye ? (look ? 'text' : 'password') : InputType}
            className={`appearance-none w-full block px-3 py-2 border border-gray-300 text-gray-900 ${
              isUse &&
              !verify?.isPass &&
              'border-red-500 focus:ring-red-500 focus:border-red-500'
            } focus:outline-none focus:ring-gray-500 focus:border-gray-500`}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value, name)}
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

        {!verify?.isPass && required ? (
          <div className="text-red-500 text-sm">{verify?.message}</div>
        ) : null}
      </div>
    </div>
  )
}

export default Input
