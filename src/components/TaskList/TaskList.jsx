import React, { useMemo, useCallback, useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

<<<<<<< HEAD
const TaskList = ({ data, onTaskUpdate }) => {
    // Memoize task filtering logic
    const taskComponents = useMemo(() => {
        if (!data?.tasks?.length) return null;

        return data.tasks.map((elem, idx) => {
            if (elem.active) {
                return <AcceptTask key={elem.id || idx} data={elem} onTaskUpdate={onTaskUpdate} />
            }
            if (elem.newTask) {
                return <NewTask key={elem.id || idx} data={elem} onTaskUpdate={onTaskUpdate} />
            }
            if (elem.completed) {
                return <CompleteTask key={elem.id || idx} data={elem} onTaskUpdate={onTaskUpdate} />
            }
            if (elem.failed) {
                return <FailedTask key={elem.id || idx} data={elem} onTaskUpdate={onTaskUpdate} />
            }
            return null;
        });
    }, [data.tasks, onTaskUpdate]);

    // Handle category filter changes
    const [activeFilter, setActiveFilter] = useState('all');
    const handleFilterChange = useCallback((filter) => {
        setActiveFilter(filter);
    }, []);

=======
const TaskList = ({ data }) => {
>>>>>>> parent of fa4b018 (Updated functionality)
    return (
        <div className='mt-6 sm:mt-10 md:mt-16'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6'>Your Tasks</h2>
            
            {/* Task Categories */}
            <div className='flex gap-3 sm:gap-4 mb-4 overflow-x-auto pb-2 scrollbar-hide'>
                <button 
                    onClick={() => handleFilterChange('all')}
                    className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base
                        ${activeFilter === 'all' ? 'bg-blue-500' : 'bg-blue-500/50'}`}
                >
                    All Tasks
                </button>
                <button 
                    onClick={() => handleFilterChange('new')}
                    className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base
                        ${activeFilter === 'new' ? 'bg-green-500' : 'bg-green-500/50'}`}
                >
                    New Tasks
                </button>
                <button 
                    onClick={() => handleFilterChange('active')}
                    className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base
                        ${activeFilter === 'active' ? 'bg-yellow-500' : 'bg-yellow-500/50'}`}
                >
                    Active Tasks
                </button>
                <button 
                    onClick={() => handleFilterChange('failed')}
                    className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base
                        ${activeFilter === 'failed' ? 'bg-red-500' : 'bg-red-500/50'}`}
                >
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
                {!data?.tasks?.length ? (
                    <div className='w-full text-center py-8 text-gray-400'>
                        No tasks available
                    </div>
<<<<<<< HEAD
                ) : taskComponents}
=======
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
>>>>>>> parent of fa4b018 (Updated functionality)
            </div>
            
            {/* Scroll Indicator */}
            <div className='hidden sm:flex justify-center mt-4'>
                <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
            </div>
        </div>
    )
}

export default React.memo(TaskList)