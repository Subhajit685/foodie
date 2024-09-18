import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../context/Storecontext'
import Spinner from '../components/Spinner'

function Singin() {

  const {isSingup, singup} = useContext(storeContext)
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handelSubmit = async (e) =>{
    e.preventDefault()
    singup({name, email, password})
  }

  if(isSingup){
    return <div className='h-screen w-screen flex justify-center items-center'>
      <Spinner/>
      </div>
  }

  return (
    <div className='h-screen w-full hero'>
      <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full sm:h-96 md:h-72 h-60 top-0 left-0 -z-15' />
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        

        <Link to={"/"}>
          <img src="/newlogo1.svg" alt="logo" className='sm:h-32 h-20 in z-10' />
        </Link>

      </header>


      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-white/60 rounded-lg shadow-md'>
          <h1 className='text-4xl text-center font-bold'>Sing up</h1>
          <form onSubmit={handelSubmit}>
            <div className='my-2'>
              <label htmlFor="name" className='text-xl'>Enter name</label>
              <input type="text" placeholder='jhon deo' id='name' className='w-full h-8 px-4 border-2 rounded my-1' value={name} onChange={(e) => setname(e.target.value)} />
            </div>
            <div className='my-2'>
              <label htmlFor="email" className='text-xl'>Enter email</label>
              <input type="email" placeholder='example@gmail.com' id='email' className='w-full h-8 px-4 border-2 rounded my-1' value={email} onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className='my-2'>
              <label htmlFor="password" className='text-xl'>Enter password</label>
              <input type="password" placeholder='********' id='password' className='w-full h-8 px-4 border-2 rounded my-1' value={password} onChange={(e) => setpassword(e.target.value)} />
            </div>
            <button className='text-center broder h-8 w-full bg-red-600 my-1 rounded hover:bg-red-700 hover:text-white flex justify-center items-center'>
              Submit{isSingup ? <Spinner/> : ""}
            </button>
            <div className='py-1 text-lg'>
              <span>All ready have an account ? </span><span><Link to={"/login"} className='text-blue-700 hover:underline'>Login</Link></span>
            </div>
          </form>

        </div>

      </div>

    </div>
  )
}

export default Singin
