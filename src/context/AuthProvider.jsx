import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const savedData = localStorage.getItem('userData')
        return savedData ? JSON.parse(savedData) : []
    })

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData))
    }, [userData])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider