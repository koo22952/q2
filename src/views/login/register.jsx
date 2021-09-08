import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Input from '@/components/input'
import loading from '@/components/loading'
import toast from '@/components/toast'

function Register(props) {
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: '',
    rePassword: '',
  })

  const fetchRegister = async () => {
    loading.start()

    await axios
      .post('/api/register', {
        username: form.username?.value,
        password: form.password?.value,
      })
      .then(({ data }) => {
        if (data.success) {
          toast.success(data.message)
          fetchLogin()
        } else {
          toast.error(data.message)
        }
      })
      .catch((err) => {
        console.log(err)
        localStorage.removeItem('userToken')
      })
      .finally(() => loading.end())
  }

  const fetchLogin = async () => {
    await axios
      .post('/api/login', {
        username: form.username?.value,
        password: form.password?.value,
      })
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem('userToken', data.token)
        } else {
          toast.error(data.message)
          history.push('/login')
        }
      })
      .catch((err) => {
        console.log(err)
        localStorage.removeItem('userToken')
      })
      .finally(() => history.push('/'))
  }

  const checkValidatorRule = (value, name) => {
    let usernameIsPass = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)
    let passwordIsPass = /^[A-z]\d{2,6}[A-z]$/.test(value)
    if (!value) {
      return {
        isPass: false,
        message: '輸入任意值',
      }
    }

    if (name === 'username') {
      return {
        isPass: usernameIsPass,
        message: usernameIsPass ? '' : '格式有誤',
      }
    }

    if (name.includes('assword')) {
      if (value.length < 4 || value.length > 8) {
        return {
          isPass: false,
          message: '密碼長度錯誤',
        }
      }

      if (name === 'rePassword' && passwordIsPass) {
        if (form.password?.value !== value) {
          return {
            isPass: false,
            message: '需要與密碼一致',
          }
        }
      }

      return {
        isPass: passwordIsPass,
        message: passwordIsPass ? '' : '格式有誤',
      }
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    let isPass = true
    for (let name in form) {
      if (!form[name].isUse) {
        isPass = false
        onChange('', name)
      }
      if (!form[name]?.value || !form[name]?.verify?.isPass) {
        isPass = false
      }
    }

    if (!isPass) return
    await fetchRegister()
  }

  const onChange = (value, name) => {
    setForm((pre) => {
      return {
        ...pre,
        [name]: {
          ...pre[name],
          value,
          isUse: true,
          verify: checkValidatorRule(value, name),
        },
      }
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-520	p-8 m-8 bg-white shadow-md rounded-md">
        <div className="font-bold text-2xl text-center mb-4">註冊</div>
        <Input
          className="mb-4"
          label="帳號"
          labelClassName="w-16"
          name="username"
          InputType="email"
          placeholder="必須是信箱"
          required
          onChange={onChange}
          isUse={form.username?.isUse || false}
          verify={form.username?.verify}
        />
        <Input
          className="mb-4"
          label="密碼"
          labelClassName="w-16"
          name="password"
          InputType="password"
          placeholder="4-8字元；首尾必須是英文；中間必須是數字"
          showEye
          required
          onChange={onChange}
          isUse={form.password?.isUse || false}
          verify={form.password?.verify}
        />
        <Input
          className="mb-4"
          label="確認密碼"
          labelClassName="w-16"
          name="rePassword"
          InputType="password"
          placeholder="4-8字元；首尾必須是英文；中間必須是數字"
          showEye
          required
          onChange={onChange}
          isUse={form.rePassword?.isUse || false}
          verify={form.rePassword?.verify}
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
