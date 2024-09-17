import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import toast from 'react-hot-toast'

function Add({url}) {
    const [image, setimage] = useState(false)
    const [name, setname] = useState("")
    const [discription, setdiscription] = useState("")
    const [price, setprice] = useState("")
    const [catagory, setcatagory] = useState("Salad")

    const hendleSubmit = async (e) =>{
        e.preventDefault()
        const fromdata = new FormData()
        fromdata.append("name",name)
        fromdata.append("discription",discription)
        fromdata.append("price",price)
        fromdata.append("catagory",catagory)
        fromdata.append("image",image)
        try {
            const res = await axios.post(`${url}/api/food/add`, fromdata, {withCredentials: true})
            setimage(false)
            setname("")
            setcatagory("")
            setdiscription("")
            setprice("")
            toast.success("Add item")
        } catch (error) {
            console.log(error)
            toast.error(response.data.message)
        }
    }
  return (
    <div className=''>
      <form onSubmit={hendleSubmit}>
        <div>
            <p className='my-2'>Upload image</p>
            <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='h-20' />
            </label>
            <input type="file" id='image' name='image' hidden required onChange={(e)=> setimage(e.target.files[0])}/>
        </div>

        <div className='flex flex-col my-4'>
            <label htmlFor="name">Product name</label>
            <input type="text" id='name' placeholder='name' className='border-2 rounded-md h-10 2xl:w-96 xl:w-96 lg:w-96 md:w-72 sm:w-56 w-52 px-4 mt-2' value={name} onChange={(e)=> setname( e.target.value)} />
        </div>


        <div className='flex flex-col my-4'>
            <label htmlFor="discription">Product description</label>
            <textarea type="text" id='discription' placeholder='discription' className='border-2 rounded-md h-28 2xl:w-96 xl:w-96 lg:w-96 md:w-72 sm:w-56 w-52 px-4 mt-2' value={discription} onChange={(e)=> setdiscription(e.target.value)}/>
        </div>

        <div className='flex flex-col my-4'>
            <label htmlFor="price">Product price</label>
            <input type="text" id='price' placeholder='price' className='border-2 rounded-md h-10 w-52 px-4 mt-2' value={price} onChange={(e)=> setprice(e.target.value)} />
        </div>
        <div className='flex flex-col my-4'>
            <label htmlFor="catagory">Product catagory</label>
            <select name="catagory" id="catagory" className='border-2 rounded-md h-10 w-52 px-4 mt-2' value={catagory} onChange={(e)=> setcatagory(e.target.value)}>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
            </select>
        </div>
        <button className='bg-black text-white px-6 py-2 rounded-md'>Add</button>
      </form>
    </div>
  )
}

export default Add
