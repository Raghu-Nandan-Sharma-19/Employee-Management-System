import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex flex-col sm:flex-row items-center sm:items-end justify-between p-4'>
        <h1 className='text-xl sm:text-2xl font-medium text-center sm:text-left'>Hello <br /> <span className='text-2xl sm:text-3xl font-semibold'>username 👋</span></h1>
        <button onClick={logOutUser} className='mt-4 sm:mt-0 bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
