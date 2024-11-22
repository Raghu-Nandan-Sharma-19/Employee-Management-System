import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const { employees } = getLocalStorage()
        setUserData(employees)
    }, [])

    const login = (username, password) => {
        // Replace this with your actual login logic
        const { employees } = getLocalStorage()
        const user = employees.find(emp => emp.username === username && emp.password === password)
        if (user) {
            setUserData(user)
            setLocalStorage({ employees })
            return true
        }
        return false
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider