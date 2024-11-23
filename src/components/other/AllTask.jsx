import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userData, setUserData] = useContext(AuthContext)
   
  return (
    <div className='bg-[#1c1c1c] p-3 sm:p-4 md:p-5 rounded mt-5 overflow-x-auto'>
        {/* Header Row */}
        <div className='min-w-[600px] bg-red-400 mb-2 py-2 px-2 sm:px-4 flex justify-between rounded'>
            <h2 className='text-sm sm:text-base md:text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-center'>New Task</h3>
            <h5 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-center'>Active Task</h5>
            <h5 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-center'>Completed</h5>
            <h5 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-center'>Failed</h5>
        </div>

        {/* Task List */}
        <div className='space-y-2'>
            {userData.map((elem, idx) => (
                <div 
                    key={idx} 
                    className='min-w-[600px] border-2 border-emerald-500 py-2 px-2 sm:px-4 flex justify-between rounded'
                >
                    <h2 className='text-sm sm:text-base md:text-lg font-medium w-1/5'>{elem.firstName}</h2>
                    <h3 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-blue-400 text-center'>{elem.taskCounts.newTask}</h3>
                    <h5 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-yellow-400 text-center'>{elem.taskCounts.active}</h5>
                    <h5 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-white text-center'>{elem.taskCounts.completed}</h5>
                    <h5 className='text-sm sm:text-base md:text-lg font-medium w-1/5 text-red-600 text-center'>{elem.taskCounts.failed}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllTask