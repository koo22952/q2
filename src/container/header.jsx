import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Menu from '@/assets/menu'
import Bell from '@/assets/bell'
import Logout from '@/assets/logout'
import toast from '@/components/toast'

function Header(props) {
  const history = useHistory()

  const onLogout = () => {
    localStorage.removeItem('userToken')
    history.push('/')
    toast.success('登出成功')
  }


  return (
    <header className='flex items-center justify-between bg-white px-4 py-2 border-b'>
      <div className='flex items-center	'>
        <div className='font-bold text-2xl mr-4'>LOGO</div>
        <div className='cursor-pointer'>
          <Menu />
        </div>
      </div>
      <div className='flex items-center'>
        <button
          type='button'
          className='pr-4  text-gray-400 hover:text-black focus:outline-none '
        >
          <Bell />
        </button>
        <div className='flex items-center'>
          <button
            className='bg-gray-800 flex text-sm rounded-full mr-2 focus:outline-none'>
            <span className='sr-only'>Open user menu</span>
            <img
              className='h-8 w-8 rounded-full'
              src='https://assets.imgix.net/unsplash/bear.jpg?fit=min&h=500&w=900&usm=10&fm=pjpg&q=80'
            />
          </button>
          <div className='text-sm'>AA軍 <span>(email)</span></div>
        </div>
        <button className='flex focus:outline-none ml-4' onClick={onLogout}>
          <Logout />
        </button>
      </div>
    </header>
  )
}

export default Header
