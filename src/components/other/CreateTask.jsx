import React, { useState, useEffect } from 'react'
import { getLocalStorage, updateLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const { employees } = getLocalStorage()
        setEmployees(employees)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
            alert('Please fill in all fields')
            return
        }

        const newTask = {
            id: Date.now(),
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const updatedEmployees = employees.map(employee => {
            if (employee.firstName === asignTo) {
                const tasks = employee.tasks || []
                return {
                    ...employee,
                    tasks: [...tasks, newTask],
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: ((employee.taskCounts && employee.taskCounts.newTask) || 0) + 1
                    }
                }
            }
            return employee
        })

        if (!updatedEmployees.some(employee => employee.firstName === asignTo)) {
            alert('Employee not found')
            return
        }

        // Update both local state and localStorage
        setEmployees(updatedEmployees)
        updateLocalStorage(updatedEmployees)

        // Reset form
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

        alert('Task created successfully!')
    }

    return (
        <div className='p-3 sm:p-4 md:p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submitHandler}
                className='flex flex-col lg:flex-row lg:flex-wrap w-full gap-4 lg:gap-6'
            >
                {/* Left Section */}
                <div className='w-full lg:w-1/2 space-y-4'>
                    {/* Task Title input */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                        <input
                            required
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                            type="text" 
                            placeholder='Make a UI design'
                        />
                    </div>
                    
                    {/* Date input */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                        <input
                            required
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                            type="date" 
                        />
                    </div>
                    
                    {/* Assign to select */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
                        <select
                            required
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 text-white [&>option]:text-black' 
                        >
                            <option value="">Select Employee</option>
                            {employees.map(employee => (
                                <option key={employee.email} value={employee.firstName}>
                                    {employee.firstName}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    {/* Category input */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                        <input
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                            type="text" 
                            placeholder='design, dev, etc' 
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className='w-full lg:w-2/5 flex flex-col'>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea 
                        required
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)} 
                        className='w-full h-32 sm:h-40 lg:h-44 text-sm py-2 px-3 rounded outline-none bg-transparent border-[1px] border-gray-400 resize-none' 
                    />
                    <button 
                        type="submit"
                        className='bg-emerald-500 py-2.5 sm:py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full transition-colors duration-300'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask