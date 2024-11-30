import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage, getLocalStorage, updateLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    // Initialize localStorage data when app loads
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData(employees) // Set initial context data from localStorage
    
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      } catch (error) {
        console.error('Error parsing user data:', error)
        localStorage.removeItem('loggedInUser')
      }
    }
    setIsLoading(false)
  }, [])

  // Sync context changes with localStorage
  useEffect(() => {
    if (userData) {
      updateLocalStorage(userData)
    }
  }, [userData])

  const handleTaskUpdate = (taskId, newStatus) => {
    // Create a copy of userData
    const updatedUserData = userData.map(user => {
      if (user.email === loggedInUserData.email) {
        // Update task status
        const updatedTasks = user.tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              active: newStatus === 'active',
              newTask: newStatus === 'newTask',
              failed: newStatus === 'failed',
              completed: newStatus === 'completed'
            }
          }
          return task
        })

        // Recalculate task counts
        const taskCounts = {
          newTask: updatedTasks.filter(t => t.newTask).length,
          active: updatedTasks.filter(t => t.active).length,
          completed: updatedTasks.filter(t => t.completed).length,
          failed: updatedTasks.filter(t => t.failed).length
        }

        return {
          ...user,
          tasks: updatedTasks,
          taskCounts
        }
      }
      return user
    })

    setUserData(updatedUserData)
  }

  const handleLogin = (email, password) => {
    if (!email || !password) {
      alert('Please enter both email and password')
      return
    }

    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const { employees } = getLocalStorage()
    const employee = employees.find(e => e.email === email)

    if (!employee) {
      alert('No account found with this email')
      return
    }

    if (employee.password === password) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      )
    } else {
      alert('Invalid password')
    }
  }

  const handleLogout = () => {
    setUser(null)
    setLoggedInUserData(null)
    localStorage.removeItem('loggedInUser')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Login handleLogin={handleLogin} />
  }

  return user === 'admin' ? (
    <AdminDashboard changeUser={handleLogout} />
  ) : (
    <EmployeeDashboard 
      changeUser={handleLogout} 
      data={loggedInUserData}
      onTaskUpdate={handleTaskUpdate}
    />
  )
}

export default App