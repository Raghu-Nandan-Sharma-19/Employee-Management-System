import React, { useState, useEffect } from 'react'
import { getLocalStorage } from '../../utils/localStorage'

const EmployeeOverview = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const { employees } = getLocalStorage()
        setEmployees(employees)
    }, [])

    return (
        <div className='p-3 sm:p-4 md:p-5 bg-[#1c1c1c] rounded'>
            <h2 className='text-xl font-semibold mb-4'>Employee Overview</h2>
            <div className='space-y-6'>
                {employees.length > 0 ? (
                    employees.map(employee => (
                        <div key={employee.email} className='border border-gray-700 rounded-lg p-4'>
                            <div className='flex justify-between items-center mb-4'>
                                <div>
                                    <h3 className='text-lg font-medium'>{employee.firstName} {employee.lastName}</h3>
                                    <p className='text-gray-400 text-sm'>{employee.email}</p>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='text-center'>
                                        <p className='text-sm text-gray-400'>New</p>
                                        <p className='font-semibold'>{employee.taskCounts?.newTask || 0}</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-sm text-gray-400'>Active</p>
                                        <p className='font-semibold'>{employee.taskCounts?.active || 0}</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-sm text-gray-400'>Completed</p>
                                        <p className='font-semibold'>{employee.taskCounts?.completed || 0}</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-sm text-gray-400'>Failed</p>
                                        <p className='font-semibold'>{employee.taskCounts?.failed || 0}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Task List */}
                            <div className='space-y-2'>
                                {employee.tasks && employee.tasks.length > 0 ? (
                                    employee.tasks.map(task => (
                                        <div key={task.id} className='bg-gray-800 rounded p-3'>
                                            <div className='flex justify-between items-start'>
                                                <div>
                                                    <h4 className='font-medium'>{task.taskTitle}</h4>
                                                    <p className='text-sm text-gray-400'>{task.taskDescription}</p>
                                                    <p className='text-sm text-gray-400 mt-1'>Due: {task.taskDate}</p>
                                                </div>
                                                <div className='px-2 py-1 rounded text-sm'>
                                                    {task.newTask && <span className='text-blue-400'>New</span>}
                                                    {task.active && <span className='text-yellow-400'>Active</span>}
                                                    {task.completed && <span className='text-green-400'>Completed</span>}
                                                    {task.failed && <span className='text-red-400'>Failed</span>}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className='text-gray-400 text-sm'>No tasks assigned</p>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-400'>No employees found</p>
                )}
            </div>
        </div>
    )
}

export default EmployeeOverview 