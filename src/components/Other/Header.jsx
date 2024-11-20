import React from 'react'

const Header = () => (
    <div className='flex items-end justify-between bg-[#1C1C1C]'>
        <h1 className='bg-[#1C1C1C] text-2xl'>Hello <br /> <span className='text-3xl
        font-semibold bg-[#1C1C1C]'>Raghu 👋</span></h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py2 rounded-sm' >Log Out</button>
    </div>
)

export default Header