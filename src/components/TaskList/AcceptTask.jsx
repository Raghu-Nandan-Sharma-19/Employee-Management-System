import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[280px] sm:w-[300px] p-3 sm:p-4 md:p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-xs sm:text-sm'>{data.taskDate}</h4>
        </div>
        
        <h2 className='mt-3 sm:mt-4 md:mt-5 text-xl sm:text-2xl font-semibold line-clamp-2'>{data.taskTitle}</h2>
        
        <p className='text-xs sm:text-sm mt-2 line-clamp-3 min-h-[3rem]'>
            {data.taskDescription}
        </p>
        
        <div className='flex justify-between items-center mt-4 sm:mt-5 md:mt-6'>
            <button className='bg-green-500 hover:bg-green-600 rounded font-medium py-1.5 px-2 sm:px-3 text-xs transition-colors duration-300'>
                Mark as Completed
            </button>
            <button className='bg-red-500 hover:bg-red-600 rounded font-medium py-1.5 px-2 sm:px-3 text-xs transition-colors duration-300'>
                Mark as Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask