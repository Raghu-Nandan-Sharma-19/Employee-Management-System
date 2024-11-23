import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10'>
        <div className='rounded-xl w-full py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-blue-400'>
            <h2 className='text-2xl sm:text-2xl md:text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-lg sm:text-xl mt-0.5 font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl w-full py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-green-400'>
            <h2 className='text-2xl sm:text-2xl md:text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-lg sm:text-xl mt-0.5 font-medium'>Completed Task</h3>
        </div>

        <div className='rounded-xl w-full py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-yellow-400'>
            <h2 className='text-2xl sm:text-2xl md:text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-lg sm:text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
        </div>

        <div className='rounded-xl w-full py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-red-400'>
            <h2 className='text-2xl sm:text-2xl md:text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-lg sm:text-xl mt-0.5 font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers