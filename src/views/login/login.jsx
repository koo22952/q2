import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/input'

function Login(props) {
  const onSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-400	p-8 m-8 bg-white shadow-md rounded-md">
        <div className="font-bold text-2xl text-center mb-4">登入</div>
        <Input
          className="mb-4"
          label="帳號"
          htmlType="username"
          InputType="text"
          placeholder="請輸入帳號"
        />
        <Input
          className="mb-4"
          label="密碼"
          htmlType="password"
          InputType="password"
          placeholder="請輸入密碼"
          showEye
        />
        <div className="text-center mt-6">
          <div className="text-center mb-4">
            <Link className="text-blue-500 text-sm" to={'/register'}>
              註冊
            </Link>
          </div>
          <button
            className="px-8 py-2 bg-blue-700 rounded-md text-white hover:bg-blue-800"
            onClick={onSubmit}
          >
            登入
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
