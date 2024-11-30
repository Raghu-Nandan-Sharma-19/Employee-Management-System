import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage, getLocalStorage, updateLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(() => {
    if (userData && loggedInUserData) {
      const updatedUser = userData.find(u => u.email === loggedInUserData.email)
      if (updatedUser) {
        setLoggedInUserData(updatedUser)
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          data: updatedUser
        }))
      }
    }
  }, [userData])

  useEffect(() => {
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

  const handleTaskUpdate = (taskId, newStatus) => {
    // Create a copy of userData
    const updatedUserData = userData.map(user => {
      if (user.email === loggedInUserData.email) {
        // Update task status
        const updatedTasks = user.tasks.map(task => {
          // Only update the specific task that matches the ID
          if (task.id === taskId) {
            return {
              ...task,
              active: newStatus === 'active',
              newTask: newStatus === 'newTask',
              failed: newStatus === 'failed',
              completed: newStatus === 'completed'
            }
          }
          // Return other tasks unchanged
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

    // Update global state
    setUserData([...updatedUserData])
    localStorage.setItem('userData', JSON.stringify(updatedUserData))
  }

  const handleLogin = (email, password) => {
    if (!email || !password) {
      alert('Please enter both email and password')
      return
    }

    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (!userData) {
      alert('User data not available')
      return
    }

    const employee = userData.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      )
    } else {
      alert('Invalid credentials')
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App