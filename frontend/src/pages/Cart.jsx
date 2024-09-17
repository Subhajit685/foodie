import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { storeContext } from '../context/Storecontext'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const { food_list, count, removeitem, gettotalamount, url } = useContext(storeContext)
  const navigate = useNavigate()

  return (
    <div >
      <Navbar />
      <h1 className='text-4xl font-bold mx-10 mt-20'>Cart items</h1>

      <div className='flex sm:mx-20 mx-8 mt-8 2xl:gap-56 xl:gap-40 lg:gap-28 md:gap-20 sm:gap-16 gap-6'>
        <p className='2xl:w-36 xl:w-32 lg:w-20 md:w-12 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs font-bold'>Item</p>
        <p className='2xl:w-36 xl:w-32 lg:w-20 md:w-12 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs font-bold'>Name</p>
        <p className='2xl:w-36 xl:w-32 lg:w-20 md:w-12 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs font-bold'>Price</p>
        <p className='2xl:w-36 xl:w-32 lg:w-20 md:w-12 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs font-bold'>Quantity</p>
        <p className='2xl:w-36 xl:w-32 lg:w-20 md:w-12 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs font-bold'>Total</p>
        <p className='2xl:w-36 xl:w-32 lg:w-20 md:w-12 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs font-bold'>Remove</p>
      </div>

      <div className='bg-gray-500 h-1 w-11/12 mx-auto my-4' />

      {food_list.map((item, index) => {
        if (count[item._id] > 0) {
          return <div ><div className='flex 2xl:gap-56 xl:gap-40 lg:gap-28 md:gap-20 sm:gap-16 gap-8 sm:mx-20 mx-8'>
            <div className='2xl:size-28 xl:size-24 lg:size-16 md:size-16 sm:size-12 size-8'>
              <img src={`${url}/images/` + item.image} alt="" className='object-cover object-center 2xl:size-28 xl:size-24 lg:size-16 md:size-16 sm:size-12 size-8' />
            </div>
            <div className='2xl:w-36 xl:w-32 lg:w-20 md:w-16 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs'>{item.name}</div>
            <div className='2xl:w-36 xl:w-32 lg:w-20 md:w-16 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs'>${item.price}</div>
            <div className='2xl:w-36 xl:w-32 lg:w-20 md:w-16 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs'>{count[item._id]}</div>
            <div className='2xl:w-36 xl:w-32 lg:w-20 md:w-16 sm:w-12 w-10 text-center sm:text-sm md:text-sm text-xs'>${item.price * count[item._id]}</div>
            <div className='2xl:w-36 xl:w-32 lg:w-20 md:w-16 sm:w-12 cursor-pointer'><Trash2 onClick={() => removeitem(item._id)} /></div>
          </div>
            <div className='bg-gray-300 h-0.5 w-11/12 mx-auto my-1' /></div>
        }
      })}

      <div className='flex 2xl:justify-around xl:justify-around lg:justify-around md:justify-around sm:justify-around 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col-reverse my-28'>

        <div className='2xl:w-96 xl:w-96 md:w-80 sm:w-60 w-56 sm:mx-auto mx-4 mt-8'>
          <h1 className='text-2xl font-bold'>Cart Totals</h1>
          <div className='flex justify-between'>
            <p className='text-sm mt-4'>Subtotal</p>
            <p className='text-sm mt-4'>${gettotalamount()}</p>
          </div>
          <div className='bg-gray-300 h-0.5 w-full sm:mx-auto my-1' />
          <div className='flex justify-between'>
            <p className='text-sm mt-4'>Delivery Free</p>
            <p className='text-sm mt-4'>{gettotalamount() > 0 ? "$5" : "$0"}</p>
          </div>
          <div className='bg-gray-300 h-0.5 w-full sm:mx-auto my-1' />
          <div className='flex justify-between'>
            <p className='text-sm font-bold mt-4'>Total</p>
            <p className='text-sm mt-4'>${gettotalamount() > 0 ? gettotalamount() + 5 : gettotalamount()}</p>
          </div>
          <button className='bg-red-500 text-white sm:p-2 p-1 my-2 rounded-sm' onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>

        <div className='2xl:w-96 xl:w-96 md:w-80 sm:w-60 w-56 sm:mx-auto mx-4 mt-8'>
          <p className='text-sm mt-4'>If you have a promo code ? Enter it here</p>
          <div className='flex my-2'>
            <input type="text" placeholder='promo code' className='border-2 rounded-sm w-full sm:px-3 px-2 sm:h-12 h-8' />
            <button className='bg-black sm:w-28 w-20 text-white sm:p-2 p-1 rounded-sm'>Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
