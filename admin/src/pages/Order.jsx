import React from 'react'
import { useState } from 'react'
import axiox from "axios"
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'

function Order({ url }) {

  const [items, setitems] = useState([])

  const fetchorder = async () => {
    try {
      const res = await axiox.get(`${url}/api/order/list`, { withCredentials: true })
      setitems(res.data.data)

    } catch (error) {
      console.log("order item", error)
    }
  }

  const hendlechenge = async (e, id) =>{
    try {
      const res = await axiox.post(`${url}/api/order/status`, {id, status : e.target.value}, {withCredentials:true})
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchorder()
  }, [])
  return (

      <div className='w-full mx-auto'>
        <h1 className='mx-10 my-10 2xl:text-4xl xl:text-4xl lg:text-xl md:text-xl sm:text-sm text-sm font-bold'>Order</h1>
        <div>
          {items.map((order, index) => {
            return <div key={order._id} className='sm:my-16 my-8 flex justify-around items-center border border-black rounded-sm text-start overflow-scroll w-full'>
              <div className='flex justify-center items-center 2xl:gap-8 xl:g-8 lg:gap-6 md:gap-4 my-2'>
                <img src={assets.parcel_icon} alt="" className='2xl:h-20 xl:h-20 lg:h-20 md:h-16 sm:h-16 h-12 object-cover object-center' />
                <p className='sm:mx-8 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0  mx-8 2xl:text-lg xl:text-lg lg:text-sm md:text-sm sm:text-sm text-xs'>{order.items.map((item, index) => {
                  if (index === item.length - 1) {
                    return item.name + "  " + item.Quantity
                  }
                  else {
                    return item.name + "  " + item.Quantity + ",  "
                  }
                })}</p>
              </div>

              <div className='flex justify-center items-center 2xl:gap-8 xl:g-8 lg:gap-6 md:gap-4 my-2'>
                <p className=' 2xl:text-lg xl:text-lg lg:text-sm md:text-sm sm:text-sm text-xs'>Amount : ${order.amount}.00</p>
                <p className='sm:mx-8 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 mx-8 2xl:text-lg xl:text-lg lg:text-sm md:text-sm sm:text-sm text-xs'>Total items : {order.items.length}</p>
              </div>

              <div className='2xl:gap-8 xl:g-8 lg:gap-6 md:gap-4 my-2 text-center'>
                <p className='font-bold 2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs text-xs'>{order.address.firstname+" "}{order.address.lastname}</p>
                <p className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs text-xs'>{order.address.email}</p>
                <p className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs text-xs'>{order.address.city}</p>
                <p className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs text-xs'>{order.address.state}</p>
                <p className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs text-xs'>{order.address.zipcode}</p>
                <p className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs text-xs'>{order.address.phone}</p>
              </div>
          
                <div className='flex justify-center items-center'>
                <select name="" id="" className='border p-2 rounded-sm bg-red-300 sm:mx-8 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0  mx-8 2xl:text-lg xl:text-lg lg:text-sm md:text-sm sm:text-sm text-xs' onChange={(e)=> hendlechenge(e, order._id)} value={order.status}>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out Of Delivary">Out Of Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
                </div>


            </div>
          })}
        </div>
      </div>

  )
}

export default Order
