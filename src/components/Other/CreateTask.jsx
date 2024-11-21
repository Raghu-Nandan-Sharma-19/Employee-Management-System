import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 mt-7 rounded flex justify-center items-center'>
            <form className='flex pr-24 py-7 lg:pl-10 lg:pr-0 flex-wrap lg:flex-row bg-zinc-900 w-full flex-col lg:items-start
             items-center lg:justify-between border-2 border-emerald-900 rounded-sm'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='lg:text-sm text-xl text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='text-sm py-1 px-2
                        lg:w-4/5 w-80 rounded outline-none bg-transparent border-[1px] 
                        border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='lg:text-sm text-xl text-gray-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2
                        lg:w-4/5 w-80 rounded outline-none bg-transparent border-[1px] 
                        border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='lg:text-sm text-xl text-gray-300 mb-0.5'>Assign to</h3>
                        <input className='text-sm py-1 px-2
                        lg:w-4/5 w-80 rounded outline-none bg-transparent border-[1px] 
                        border-gray-400 mb-4' type="text" placeholder='Employee Name'/>
                    </div>
                    <div>
                    <h3 className='lg:text-sm text-xl text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2
                        lg:w-4/5 w-80 rounded outline-none bg-transparent border-[1px] 
                        border-gray-400 mb-4' type="text" placeholder='design, dev, etc'/>
                </div>
                </div>

                <div className='w-2/5 flex flex-col mr-10 items-start'>
                    <h3 className='lg:text-sm text-xl mb-0.5'>Description</h3>
                    <textarea className='lg:w-full h-44 lg:text-sm text-base 
                    py-2 px-4 rounded outline-none bg-transparent 
                    border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 py-3
                    hover:bg-emerald-600 px-5 rounded text-sm mt-4 lg:w-full w-[333px]'>Create Task</button>
                </div>
                
                
                
            </form>
        </div>
  )
}

export default CreateTask