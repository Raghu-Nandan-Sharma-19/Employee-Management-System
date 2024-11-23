import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  // Get username from props.data
  const username = props.data ? props.data.firstName : 'Admin'
  
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0'>
        <div className='w-full sm:w-auto'>
            <h1 className='text-xl sm:text-2xl font-medium'>Hello</h1>
            <span className='text-2xl sm:text-3xl font-semibold block mt-1'>
                {username} 👋
            </span>
        </div>
        
        <button 
            onClick={logOutUser} 
            className='w-full sm:w-auto bg-red-600 hover:bg-red-700 text-sm sm:text-base font-medium text-white px-4 sm:px-5 py-2 rounded transition-colors duration-300'
        >
            Log Out
        </button>
    </div>
  )
}

export default Header