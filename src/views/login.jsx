import React from 'react'

function Login(props) {
  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">帳號：</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          placeholder="請輸入帳號"
        />
        <label htmlFor="password">密碼：</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="請輸入密碼"
        />
        <button type="submit">送出</button>
      </form>
    </div>
  )
}

export default Login
