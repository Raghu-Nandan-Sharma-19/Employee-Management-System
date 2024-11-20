import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] flex flex-col lg:flex-row lg:overflow-x-auto items-center justify-start gap-5 
    flex-nowrap w-full py-5 mt-10 '>
        <div className='h-full flex-shrink-0 w-full p-5 lg:w-[300px] rounded-xl bg-red-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint vel quisquam quidem recusandae fugit.
            </p>
        </div>

        <div className='h-full flex-shrink-0 w-full p-5 lg:w-[300px] rounded-xl bg-green-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint vel quisquam quidem recusandae fugit.
            </p>
        </div>

        <div className='h-full flex-shrink-0 w-full p-5 lg:w-[300px] rounded-xl bg-blue-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint vel quisquam quidem recusandae fugit.
            </p>
        </div>

        <div className='h-full flex-shrink-0 w-full p-5 lg:w-[300px] rounded-xl bg-yellow-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint vel quisquam quidem recusandae fugit.
            </p>
        </div>
        
    </div>
  )
}

export default TaskList