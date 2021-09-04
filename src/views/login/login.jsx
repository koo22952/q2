import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Login(props) {
  const onSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-400	p-8 m-8 bg-white shadow-md rounded-md">
        <div className="font-bold text-2xl text-center mb-4">登入</div>
        <div className="flex items-center	w-full mb-4">
          <label className="mr-4" htmlFor="username">
            帳號
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="appearance-none block flex-1 px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10"
            placeholder="請輸入帳號"
          />
        </div>
        <div className="flex items-center	w-full mb-4">
          <label className="mr-4" htmlFor="password">
            密碼
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="appearance-none block flex-1 px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10"
            placeholder="請輸入密碼"
          />
        </div>

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
