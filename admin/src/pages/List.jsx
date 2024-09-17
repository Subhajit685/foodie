import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Trash2 } from 'lucide-react';

function List({url}) {

  const [list, setlist] = useState([])

  const fetchdata = async () =>{
    try {
      const res = await axios.get(`${url}/api/food/item`, {withCredentials: true})
      setlist(res.data.data)   
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  const hendleClick = async (id) =>{
    try {
      const res = await axios.post(`${url}/api/food/delete`, {id : id}, {withCredentials:true})
      toast.success(res.data.message)
      fetchdata()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
     fetchdata()
  }, [])
  return (
    <div>
      <h1 className='text-2xl font-bold'>Add foods list</h1>
      {list.map((item)=>{
        return <div key={item._id} className='flex items-center justify-between 2xl:gap-32 xl:gap-32 lg:gap-24 md:gap-20 sm:gap-16 gap-4 my-4'>
          <img src={`${url}/images/`+item.image} alt="" className='2xl:size-32 xl:size-32 lg:size-28 md:size-24 sm:size-16 size-16 rounded-full object-cover object-center'/>
          <p className='2xl:text-xl xl:text-xl lg:text-xl md:text-sm sm:text-sm text-xs 2xl:w-16 xl:w-16 lg:w-16 md:w-10 sm:w-8 w-8'>{item.name}</p>
          <p className='2xl:text-xl xl:text-xl lg:text-xl md:text-sm sm:text-sm text-xs 2xl:w-16 xl:w-16 lg:w-16 md:w-10 sm:w-8 w-8'>{item.price}</p>
          <p className='2xl:text-xl xl:text-xl lg:text-xl md:text-sm sm:text-sm text-xs 2xl:w-16 xl:w-16 lg:w-16 md:w-10 sm:w-8 w-8'>{item.catagory}</p>
          <Trash2 onClick={()=> hendleClick(item._id)}/>
        </div>
      })}
    </div>
  )
}

export default List
