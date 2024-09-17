import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { storeContext } from '../context/Storecontext'
import axios from 'axios'
import { assets } from '../assets/assets'

function Myorder() {

    const [items, setitems] = useState([])
    const { url } = useContext(storeContext)

    const fetchorder = async () => {
        try {
            const res = await axios.post(`${url}/api/order/showOrder`, {}, { withCredentials: true })
            setitems(res.data.data)

        } catch (error) {
            console.log("order item", error)
        }
    }

    useEffect(() => {
        fetchorder()
    }, [])


    return (
        <div>
            <Navbar />
            <div>
                <h1 className='mx-10 my-10 2xl:text-4xl xl:text-4xl lg:text-xl md:text-xl sm:text-sm text-sm font-bold'>My order</h1>
                <div className=''>
                    {items.map((order, index) => {
                        return <div key={order._id} className='sm:mx-20 mx-10 sm:my-16 my-8 2xl:flex xl:flex lg:flex md:flex sm:flex justify-around items-center border border-black rounded-sm'>
                            <div className='flex justify-center items-center 2xl:gap-8 xl:g-8 lg:gap-6 md:gap-4 my-2'>
                            <img src={assets.parcel_icon} alt="" className='2xl:h-20 xl:h-20 lg:h-20 md:h-16 sm:h-16 h-12' />
                            <p className='sm:mx-8 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0  mx-8 2xl:text-xl xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs'>{order.items.map((item, index) => {
                                    if (index === item.length - 1) {
                                        return item.name+"  "+item.Quantity 
                                    }
                                    else{
                                        return item.name+"  "+item.Quantity+",  "
                                    }
                                })}</p>
                                </div>
                                <div className='flex justify-center items-center 2xl:gap-8 xl:g-8 lg:gap-6 md:gap-4 my-2'>
                            <p className=' 2xl:text-xl xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs'>Amount : ${order.amount}.00</p>
                            <p className='sm:mx-8 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 mx-8 2xl:text-xl xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs'>Total items : {order.items.length}</p>
                            </div>
                            <div className='flex justify-center items-center 2xl:gap-8 xl:g-8 lg:gap-6 md:gap-4 my-2'>
                            <p><span className='mx-2'>&#9679;</span><span className='font-bold 2xl:text-xl xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs'>{order.status}</span></p>
                            {order.status === "Delivered" ? "" :
                            <button className='border p-2 rounded-sm bg-red-300 sm:mx-8 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0  mx-8 2xl:text-xl xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs' onClick={fetchorder}>Track order</button>}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Myorder
