import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/input'
import axios from 'axios'

function Login(props) {
  const [form, setForm] = useState({})

  const onSubmit = async (e) => {
    console.log(form)
    // await axios
    //   .post('/api/login', {
    //     username: '1123',
    //     password: '123132',
    //   })
    //   .then((res) => {
    //     console.log(res)
    //   })

    e.preventDefault()
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-520	p-8 m-8  bg-white shadow-md rounded-md">
          <div className="font-bold text-2xl text-center mb-4">登入</div>
          <Input
            className="mb-4"
            label="帳號"
            name="account"
            InputType="text"
            placeholder="請輸入帳號"
            setForm={setForm}
          />
          <Input
            className="mb-4"
            label="密碼"
            name="password"
            InputType="password"
            placeholder="請輸入密碼"
            showEye
            setForm={setForm}
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
    </>
  )
}

export default Login
