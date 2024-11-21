import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-3 lg:p-20'>
            <h1 className='text-center mb-5 text-5xl font-bold font-serif'>Login</h1>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} 
            className='flex flex-col items-center justify-center'>

                <input value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='bg-transparent placeholder:text-gray-400 
                border-2 border-emerald-600 rounded-full py-4 px-5 
                text-xl text-white outline-none' type="email" placeholder='Enter your email' />

                <input value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                required 
                className='bg-transparent placeholder:text-gray-400 
                border-2 border-emerald-600 rounded-full py-4 px-5 
                text-xl text-white outline-none mt-3' type="password" placeholder='Enter password'  />
                
                <button className='w-full placeholder:text-white 
                 bg-emerald-600 border-none rounded-full py-4 px-5 
                text-xl text-white outline-none mt-5'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login