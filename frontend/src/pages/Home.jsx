import React, { useContext } from 'react'
import HomeWith from './home/HomeWith'
import HomeAuth from './home/HomeAuth'
import { storeContext } from '../context/Storecontext'

function Home() {

  const {user} = useContext(storeContext)
  return (
    <div>
      {user ? <HomeWith/> : <HomeAuth/>}
    </div>
  )
}

export default Home
