import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex min-h-screen w-full items-center justify-center px-4 py-8'>
            <div className='border-2 rounded-xl border-emerald-600 p-6 sm:p-12 md:p-20 w-full max-w-md'>
                <form 
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center w-full'
                >
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className='w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full placeholder:text-gray-400' 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full mt-3 placeholder:text-gray-400' 
                        type="password" 
                        placeholder='Enter password' 
                    />
                    <button 
                        className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-base sm:text-lg py-2 px-8 w-full rounded-full placeholder:text-white transition-colors duration-300'
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login