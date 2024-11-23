import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div className='mt-6 sm:mt-10 md:mt-16'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6'>Your Tasks</h2>
            
            {/* Task Categories */}
            <div className='flex gap-3 sm:gap-4 mb-4 overflow-x-auto pb-2 scrollbar-hide'>
                <button className='whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 rounded-full text-sm sm:text-base'>
                    All Tasks
                </button>
                <button className='whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500 rounded-full text-sm sm:text-base'>
                    New Tasks
                </button>
                <button className='whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500 rounded-full text-sm sm:text-base'>
                    Active Tasks
                </button>
                <button className='whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500 rounded-full text-sm sm:text-base'>
                    Failed Tasks
                </button>
            </div>
            
            {/* Task Cards */}
            <div 
                id='tasklist' 
                className='flex items-start gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-4 sm:pb-6'
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {data.tasks.length === 0 ? (
                    <div className='w-full text-center py-8 text-gray-400'>
                        No tasks available
                    </div>
                ) : (
                    data.tasks.map((elem, idx) => {
                        if (elem.active) {
                            return <AcceptTask key={idx} data={elem} />
                        }
                        if (elem.newTask) {
                            return <NewTask key={idx} data={elem} />
                        }
                        if (elem.completed) {
                            return <CompleteTask key={idx} data={elem} />
                        }
                        if (elem.failed) {
                            return <FailedTask key={idx} data={elem} />
                        }
                        return null;
                    })
                )}
            </div>
            
            {/* Scroll Indicator */}
            <div className='hidden sm:flex justify-center mt-4'>
                <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
            </div>
        </div>
    )
}

export default TaskList