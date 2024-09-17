import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from "react-router-dom"
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import { Toaster } from "react-hot-toast"

function App() {

  const url = "https://foodie-6t6t.onrender.com"
  return (
    <div className='relative'>
      <Navbar />
      <hr className='bg-gray-400' />
      <div className='absolute 2xl:w-64 xl:w-64 lg:w-52 md:w-28 sm:w-16 w-10 left-0'>
        <Sidebar />
      </div>
      <div className='absolute 2xl:left-64 xl:left-64 lg:left-52 md:left-28 sm:left-16 left-10 m-8 w-4/5'>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/order' element={<Order url={url}/>} />
        </Routes>
      </div>
    <Toaster/>
    </div>
  )
}

export default App
