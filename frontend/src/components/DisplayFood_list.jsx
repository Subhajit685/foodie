import React, { useContext } from 'react'
import { storeContext } from '../context/Storecontext'
import { assets } from '../assets/assets'
import { Minus, Plus } from 'lucide-react'


function DisplayFood_list({catagory}) {
  

    const { food_list, count, additem, removeitem, url } = useContext(storeContext)
    return (
        <div>
            <h1 className='sm:text-6xl text-4xl font-sans font-extrabold text-black mx-10 my-5'>Top dishes near you</h1>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto'>
                {food_list.map((item) => {
                    if(catagory === "All" || catagory === item.category)
                    return <div className='mx-auto my-4 bg-slate-50 hover:scale-105' key={item._id}>
                        <div className='h-96 xl:w-80 lg:w-64 md:w-64 sm:w-64 rounded-md drop-shadow-md border'>
                            <div className='h-52 w-full relative'>
                                <img src={`${url}/images/`+item.image} alt="" className='h-64 w-full object-cover object-center rounded-md' />
                                {!count[item._id] ?
                                    <div className='absolute flex right-6 bottom-0 bg-slate-100 rounded-full p-2 cursor-pointer'>
                                        <Plus className='rounded-full bg-green-400' onClick={()=> additem(item._id)}/>
                                    </div>
                                    :

                                    <div className='absolute flex right-6 bottom-0 bg-slate-100 rounded-full p-2 cursor-pointer'>
                                        <Minus className='rounded-full bg-red-400' onClick={()=> removeitem(item._id)} />
                                        <p className='mx-2'>{count[item._id]}</p>
                                        <Plus className='rounded-full bg-green-400' onClick={()=> additem(item._id)}/>
                                    </div>}
                            </div>
                            <div className='flex justify-between mx-2 pt-16'>
                                <p className='font-bold'>{item.name}</p>
                                <img src={assets.rating_starts} alt="" />
                            </div>
                            <p className='px-2 py-1'>{item.discription}</p>
                            <p className='px-2 text-red-500'>${item.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default DisplayFood_list
