import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Header(props) {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 border-b">
      <div className="font-bold text-2xl">LOGO</div>
      <ul className="flex items-center text-sm text-blue-500">
        <li className="mr-4">
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/news">最新消息</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
