import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import DisplayFood_list from '../../components/DisplayFood_list'
import { menu_list } from '../../assets/assets'

function HomeWith() {
  const [catagory, setcatagory] = useState("All")
  return (
    <div className=''>
      <Navbar />

      <div className='w-full hi overflow-hidden'>
        <img src="/beriyani.jpg" alt="" className='w-full hi mx-auto object-center object-cover border rounded' />
      </div>

      <div className='absolute sm:top-96 top-56 left-10'>
        <h1 className='sm:text-6xl text-4xl font-sans font-extrabold text-white'>Delicious Meals Delivered to Your Doorstep – Order Now on Foodies.com!</h1>
        <p className='sm:text-2xl text-xl text-white my-4'>Welcome to Foodies.com – your go-to platform for easy online food ordering and delivery. Explore a wide variety of cuisines from your favorite local restaurants, delivered hot and fresh right to your door. Satisfy your cravings anytime, anywhere with just a few clicks. Order now and enjoy!</p>
      </div>

      <div>
        <h1 className='sm:text-6xl text-4xl font-sans font-extrabold text-black mx-10 my-5' id='menu'>
          Explore our menu
        </h1>
        <p className='sm:text-sm text-xs text-black my-4 mx-10'>
          Explore our menu and find your perfect meal! Whether you're craving something quick and easy or looking to indulge in a hearty dish, we have something for everyone. Choose from our <strong>Popular Picks</strong>, savor the bold flavors of our <strong>Chef's Specials</strong>, or enjoy a lighter option from our <strong>Fresh & Healthy</strong> section. If you're in the mood for something customizable, try our <strong>Build Your Own</strong> dishes, or treat yourself to one of our <strong>Sweet Treats</strong> to end your meal on a high note. No matter your craving, we’ve got it covered—just pick, order, and enjoy!
        </p>
      </div>

      <div className='flex mx-10 my-6 gap-6 overflow-x-scroll no-scrollbar px-4 py-4'>
        {menu_list.map((list, index) => {
          return <div className='text-center cursor-pointer' key={index}>
            <div className="sm:size-36 size-24 object-cover object-center rounded-full" onClick={()=> catagory === list.menu_name ? setcatagory("All") : setcatagory(list.menu_name)}>
            <img src={list.menu_image} alt="" className={catagory === list.menu_name ? "sm:size-36 size-24 object-cover object-center rounded-full ring-red-900 ring-4 scale-110" : "sm:size-36 size-24 object-cover object-center rounded-full"} />
            </div>
            <p className="sm:text-xl font-bold my-6">{list.menu_name}</p>
          </div>
        })}
      </div>

      <div className='bg-gray-500 h-1 w-11/12 mx-auto my-4'>

      </div>

      <DisplayFood_list catagory={catagory}/>

    </div>

  )
}

export default HomeWith
