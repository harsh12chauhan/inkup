import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center mb-2 sticky top-0 bg-white shadow-sm'>
        <div>
            <h2 className='text-gray-950 mx-4 py-2 text-xl font-bold hover:translate-x-4 hover:transition-all duration-1000 cursor-pointer '>Home</h2>
        </div>
        <div>
            <h2 className='text-gray-950 py-2 text-xl font-semibold'>|</h2>
        </div>
        <div>
            <h2 className='text-gray-950 mx-4 py-2 text-xl font-bold hover:-translate-x-4 hover:transition-all duration-1000 cursor-pointer'>Note's</h2>
        </div>
        <div>
          <h2 className=' absolute right-10 top-3'> =#D </h2>
        </div>
    </nav>
  )
}

export default Navbar

