import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Singin from './pages/Singin'
import Login from './pages/Login'
import { Toaster } from "react-hot-toast"
import { storeContext } from './context/Storecontext'
import Myorder from './pages/Myorder'


function App() {
  const {user, check} = useContext(storeContext)

  useEffect(()=>{
    check()
  }, [])
  console.log(user)
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={user ? <Cart/> :  <Navigate to={"/"}/>}></Route>
      <Route path='/order' element={user ? <PlaceOrder/> :  <Navigate to={"/"}/>}></Route>
      <Route path='/singup' element={!user ? <Singin/> : <Navigate to={"/"}/>}></Route>
      <Route path='/login' element={!user ? <Login/> : <Navigate to={"/"}/>}></Route>
      <Route path='/myorder' element={user ? <Myorder/> : <Navigate to={"/"}/>}></Route>
    </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
