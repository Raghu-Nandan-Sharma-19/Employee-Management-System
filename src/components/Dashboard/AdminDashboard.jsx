import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full p-4 sm:p-5 md:p-7 overflow-x-hidden'>
            <div className='max-w-7xl mx-auto'>
                <Header changeUser={props.changeUser} />
                <div className='mt-4 sm:mt-6 md:mt-8'>
                    <CreateTask />
                </div>
                <div className='mt-4 sm:mt-6 md:mt-8'>
                    <AllTask />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard