import React from 'react'

const TaskListNumbers = () => {
  return (
    <div>
    <div className='flex  mt-10 justify-between bg-[#1C1C1C] gap-5 screen'>
        <div className='p-5 w-[45%] lg:py-6 lg:px-9 rounded-xl bg-blue-400'>
            <h2 className='text-3xl font-semibold' >1</h2>
            <h3 className='text-xl font-medium'>New task</h3>
        </div>

        <div className='p-5 w-[45%] lg:py-6 lg:px-9 rounded-xl bg-green-400'>
            <h2 className='text-3xl font-semibold' >3</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
    </div>
    <div className='flex  mt-10 justify-between bg-[#1C1C1C] gap-5 screen'>
        <div className='p-5 w-[45%] lg:py-6 lg:px-9 text-black  rounded-xl bg-yellow-400'>
            <h2 className='text-3xl font-semibold' >0</h2>
            <h3 className='text-xl font-medium'>Accepted task</h3>
        </div>

        <div className='p-5 w-[45%] lg:py-6 lg:px-9 text-black rounded-xl bg-red-400'>
            <h2 className='text-3xl font-semibold' >0</h2>
            <h3 className='text-xl font-medium'>Failed task</h3>
        </div>
    </div>
    </div>
  )
}

export default TaskListNumbers