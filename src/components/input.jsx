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
  setForm  取得 input value
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
  setForm = () => {},
  required = false,
  valid,
  isUse = false, //是否有輸入過
  isSamePassword = true,
}) {
  const [look, setLook] = useState(false)

  const checkValidatorRule = (value, type) => {
    if (!value && !!required) {
      return '必填'
    }

    if (type === 'email') {
      if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
        return `必須是email格式`
      }
    }

    if (type.includes('password')) {
      if (
        !/^[A-z]\d{2,6}[A-z]$/.test(value) ||
        value.length < 4 ||
        value.length > 8
      ) {
        console.log('密碼格式錯誤')
        return `密碼格式錯誤`
      }
    }

    console.log(isUse, isSamePassword)
    if (type === 'password') {
      if (isUse && !isSamePassword) {
        console.log('必須與密碼相同')
      }
    }
    return ''
  }

  const onChang = (e, name, type) => {
    setForm((pre) => {
      return {
        ...pre,
        [name]: {
          value: e.target.value,
          isUse: true, //是否有輸入過
          pass: !!checkValidatorRule(e.target.value, type),
          message: checkValidatorRule(e.target.value, type),
        },
      }
    })
  }

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
              isUse && !valid && 'border-red-500'
            } focus:outline-none focus:ring-gray-500 focus:border-gray-500`}
            placeholder={placeholder}
            onChange={(e) => onChang(e, name, InputType)}
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

        {valid && required ? (
          <div className="text-red-500 text-sm">{'123'}</div>
        ) : null}
      </div>
    </div>
  )
}

export default Input
