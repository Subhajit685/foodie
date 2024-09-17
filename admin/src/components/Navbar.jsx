import React from 'react'
import { assets } from '../assets/assets'

function Navbar() {
  return (
    <div className='flex justify-around my-4 items-center'>
      <img src="/newlogo.png" alt="" className='sm:h-24 h-16'/>
      <img src={assets.profile_image} alt="" className='sm:h-16 h-12'/>
    </div>
  )
}

export default Navbar
