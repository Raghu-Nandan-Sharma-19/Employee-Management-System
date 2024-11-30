import React, { useState } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import EmployeeOverview from '../other/EmployeeOverview'

const AdminDashboard = (props) => {
    const [activeTab, setActiveTab] = useState('tasks')

    return (
        <div className='min-h-screen w-full p-4 sm:p-5 md:p-7 overflow-x-hidden bg-[#111111]'>
            <div className='max-w-7xl mx-auto'>
                <Header changeUser={props.changeUser} />
                
                {/* Tab Navigation */}
                <div className='flex gap-4 mt-4 sm:mt-6 md:mt-8'>
                    <button 
                        onClick={() => setActiveTab('tasks')}
                        className={`px-4 py-2 rounded transition-colors duration-200 ${
                            activeTab === 'tasks' 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                        Tasks
                    </button>
                    <button 
                        onClick={() => setActiveTab('employees')}
                        className={`px-4 py-2 rounded transition-colors duration-200 ${
                            activeTab === 'employees' 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                        Employees
                    </button>
                </div>

                {activeTab === 'tasks' ? (
                    <>
                        <div className='mt-4 sm:mt-6 md:mt-8'>
                            <CreateTask />
                        </div>
                        <div className='mt-4 sm:mt-6 md:mt-8'>
                            <AllTask />
                        </div>
                    </>
                ) : (
                    <div className='mt-4 sm:mt-6 md:mt-8'>
                        <EmployeeOverview />
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminDashboard