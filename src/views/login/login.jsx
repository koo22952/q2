import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import Input from '@/components/input'
import loading from '@/components/loading'
import toast from '@/components/toast'
import { login } from '@api'

function Login(props) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const onChange = (value, name) => {
    setForm((pre) => {
      return {
        ...pre,
        [name]: value,
      }
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!form.username || !form.password) {
      toast.error('請輸入帳號密碼')
      return
    }

    loading.start()

    await login({
      username: form.username,
      password: form.password,
    })
      .then(async ({ data }) => {
        console.log(data, '1111')
        if (data.success) {
          localStorage.setItem('userToken', data.token)
          await toast.success(data.message)
          await history.push('/')
        }
      })
      .catch((err) => {
        console.log(err)
        localStorage.removeItem('userToken')
      })
      .finally(() => loading.end())
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-520	p-8 m-8  bg-white shadow-md rounded-md">
          <div className="font-bold text-2xl text-center mb-4">登入</div>
          <Input
            className="mb-4"
            label="帳號"
            name="username"
            InputType="text"
            placeholder="請輸入帳號"
            onChange={onChange}
          />
          <Input
            className="mb-4"
            label="密碼"
            name="password"
            InputType="password"
            placeholder="請輸入密碼"
            showEye
            onChange={onChange}
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
