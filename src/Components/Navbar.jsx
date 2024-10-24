import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='flex gap-5 bg-black text-white text-2xl h-[100px] items-center justify-center'>
    <Link to='/' className='hover:bg-white hover:text-black rounded-lg p-4'>Home</Link>
    <Link to='/Content' className='hover:bg-white hover:text-black rounded-lg p-4'>Content</Link>
    </div>
    </>
  )
}

export default Navbar