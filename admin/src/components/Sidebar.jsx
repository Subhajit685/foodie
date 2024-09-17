import React from 'react'
import { assets } from '../assets/assets'
import {FilePlus, List, ListOrdered} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='2xl:w-64 xl:w-64 lg:w-52 md:w-28 sm:w-16 w-10 relative h-screen'>
      <NavLink to={"/add"} className='flex justify-center items-center gap-4 border-2 border-black sm:h-16 h-10 2xl:w-44 xl:w-44 lg:w-44 md:w-16 sm:w-16 w-10 mt-8 right-0 top-8 absolute rounded-lg hover:bg-red-400'>
        <FilePlus className='2xl:size-10 xl:size-10 lg:size-10 md:size-10 sm:size-8 size-8'/>
        <p className='2xl:block xl:block lg:block md:hidden sm:hidden hidden text-xl'>Add Items</p>
      </NavLink>
      <NavLink to={"/list"} className='flex justify-center items-center gap-4 border-2 border-black sm:h-16 h-10 2xl:w-44 xl:w-44 lg:w-44 md:w-16 sm:w-16 w-10 mt-28 right-0 top-8 absolute rounded-lg hover:bg-red-400'>
        <List className='2xl:size-10 xl:size-10 lg:size-10 md:size-10 sm:size-8 size-8'/>
        <p className='2xl:block xl:block lg:block md:hidden sm:hidden hidden text-xl'>List Items</p>
      </NavLink>
      <NavLink to={"/order"} className='flex justify-center items-center gap-4 border-2 border-black sm:h-16 h-10 2xl:w-44 xl:w-44 lg:w-44 md:w-16 sm:w-16 w-10 mt-48 right-0 top-8 absolute rounded-lg hover:bg-red-400'>
        <ListOrdered className='2xl:size-10 xl:size-10 lg:size-10 md:size-10 sm:size-8 size-8'/>
        <p className='2xl:block xl:block lg:block md:hidden sm:hidden hidden text-xl'>Orders</p>
      </NavLink>
      <div className='w-0.5 h-full bg-slate-400 absolute top-0 right-0'/>
    </div>
  )
}

export default Sidebar
