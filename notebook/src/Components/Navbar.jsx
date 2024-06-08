import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center my-2 relative'>
        <div>
            <h2 className='text-gray-950 mx-4 text-xl font-bold hover:translate-x-4 hover:transition-all duration-1000 cursor-pointer '>Home</h2>
        </div>
        <div>
            <h2 className='text-gray-950 text-xl font-semibold'>|</h2>
        </div>
        <div>
            <h2 className='text-gray-950 mx-4 text-xl font-bold hover:-translate-x-4 hover:transition-all duration-1000 cursor-pointer'>Note</h2>
        </div>
    </nav>
  )
}

export default Navbar

