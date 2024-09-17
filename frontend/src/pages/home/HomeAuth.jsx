import React from 'react'
import { Link } from 'react-router-dom'

function HomeAuth() {
  return (
    <div className='bg-yellow-50 h-screen w-full relative'>


      <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-9' />


      <div className='absolute h-full w-full top-0 left-0 backdrop-opacity-10 backdrop-invert bg-black/20' />
      <img src="/beriyani.jpg" alt="" className='h-screen w-full object-cover object-center' />

      <Link to={"/"}>
          <img src="/newlogo1.svg" alt="logo" className='absolute top-4 sm:h-32 h-20 in z-30' />
        </Link>
      <div className='absolute top-16 sm:right-16 bg-red-500 sm:h-10 sm:w-24 rounded hover:bg-red-600 cursor-pointer transition ease-in-out delay-50 flex justify-center items-center h-6 w-16 right-6'>
        <Link to={"/singup"} className='font-sans sm:text-xl text-sm text-white'>Sing Up</Link>
      </div>

      <div className='absolute 2xl:top-1/3 xl:top-1/3 lg:top-1/3 md:top-1/3 sm:top-60 top-36 left-10'>
        <h1 className='2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-sans font-extrabold text-white'>Delicious Food Delivered Fast – Order from Foodies.com Today!</h1>
        <p className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm text-white my-4'>Welcome to Foodies.com, your one-stop destination for mouthwatering meals delivered straight to your home. Whether you're craving comfort food, international cuisine, or a healthy bite, we've got you covered with a variety of options from your favorite local restaurants. Our easy-to-use platform allows you to explore menus, discover new flavors, and order with just a few clicks.
          <br />
          <br />
          No more waiting in lines or worrying about what to cook – let us bring the restaurant experience to you! Fresh, delicious, and fast – that's the Foodies.com promise. Ready to satisfy your cravings? Order now!</p>
      </div>
    </div>
  )
}

export default HomeAuth
