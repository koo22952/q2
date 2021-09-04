import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/input'

function Register(props) {
  const [form, setForm] = useState({})
  const onSubmit = (e) => {
    console.log(form)
    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-510	p-8 m-8 bg-white shadow-md rounded-md">
        <div className="font-bold text-2xl text-center mb-4">註冊</div>
        <Input
          className="mb-4"
          label="帳號"
          labelClassName="w-16"
          htmlType="account"
          InputType="email"
          placeholder="必須是信箱"
          setForm={setForm}
        />
        <Input
          className="mb-4"
          label="密碼"
          labelClassName="w-16"
          htmlType="password"
          InputType="password"
          placeholder="4-8字元；首尾必須是英文；中間必須是數字"
          showEye
          setForm={setForm}
        />
        <Input
          className="mb-4"
          label="確認密碼"
          labelClassName="w-16"
          htmlType="rePassword"
          InputType="password"
          placeholder="4-8字元；首尾必須是英文；中間必須是數字"
          showEye
          setForm={setForm}
        />
        <div className="text-center mt-6">
          <div className="text-center mb-4">
            <Link className="text-blue-500 text-sm" to={'/login'}>
              返回登入
            </Link>
          </div>
          <button
            className="px-8 py-2 bg-blue-700 rounded-md text-white hover:bg-blue-800"
            onClick={onSubmit}
          >
            註冊
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
