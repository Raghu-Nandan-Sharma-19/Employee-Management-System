import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-full sm:w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded mb-2 sm:mb-0'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>
        {data.taskDescription}
      </p>
      <div className='flex flex-col sm:flex-row justify-between mt-6 space-y-2 sm:space-y-0 sm:space-x-2'>
        <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
        <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
