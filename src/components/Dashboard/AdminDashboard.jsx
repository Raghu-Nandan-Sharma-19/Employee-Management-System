import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7 bg-[#1C1C1C]'>
        <Header />
        <CreateTask />
    </div>
  )
}

export default AdminDashboard