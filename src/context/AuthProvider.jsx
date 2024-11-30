<<<<<<< HEAD
import React, { createContext, useState } from 'react'
=======
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
>>>>>>> parent of fa4b018 (Updated functionality)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
<<<<<<< HEAD
    const [userData, setUserData] = useState([])
=======
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    
>>>>>>> parent of fa4b018 (Updated functionality)

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider