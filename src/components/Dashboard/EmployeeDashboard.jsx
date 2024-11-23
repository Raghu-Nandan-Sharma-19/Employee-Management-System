import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-[#1C1C1C] p-3 sm:p-6 md:p-10 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto space-y-3 sm:space-y-6 md:space-y-8'>
        <Header changeUser={props.changeUser} data={props.data}/>
        
        <div className='w-full'>
          <TaskListNumbers data={props.data} />
        </div>
        
        <div className='w-full'>
          <TaskList data={props.data} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard