import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BriefcaseBusiness, Menu, ShoppingCart } from 'lucide-react';
import { storeContext } from '../context/Storecontext';

function Navbar() {

    const [menu, setmenu] = useState("home")
    const [mobile, setmobile] = useState(false)
    const { gettotalamount, logout } = useContext(storeContext)

    const hendleClick = (e) => {
        e.preventDefault()
        setmobile(!mobile)
    }

    const hendlelog = (e) =>{
        e.preventDefault()
        logout()
    }
    return (
        <>
            <div className='flex justify-around items-center'>
                <img src="/newlogo.png" alt="" className='top-5 left-0 sm:h-20 md:h-24 lg:h-32 h-16' />
                <div className='hidden sm:flex sm:gap-3 md:gap-6 lg:gap-12 gap-2 2xl:text-2xl xl:text-xl lg:text-xl md:text-sm sm:text-sm text-xs'>
                    <Link to={"/"} className={menu === "home" ? "underline" : ""} onClick={() => setmenu("home")}>Home</Link>
                    <a href='#menu' className={menu === "menu" ? "underline" : ""} onClick={() => setmenu("menu")}>Menu</a>
                    <Link to={"/"} className={menu === "contact" ? "underline" : ""} onClick={() => setmenu("contact")}>Contact us</Link>
                </div>
                <div className='hidden sm:flex gap-6 items-center'>
                    <div className='relative'>
                        <Link to={"/cart"}><ShoppingCart className='2xl:size-10 xl:size-10 lg:size-10' /></Link>
                        {gettotalamount()>0 ? <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-600 top-0 right-3"></span> : <span></span>}
                    </div>
                    <div>
                        <Link to={"/myorder"}><BriefcaseBusiness className='2xl:size-10 xl:size-10 lg:size-10'/></Link>
                    </div>
                    <div className='bg-red-500 sm:h-10 sm:w-24 rounded hover:bg-red-600 cursor-pointer transition ease-in-out delay-50 flex justify-center items-center h-6 w-16'>
                        <button onClick={hendlelog} className='font-sans sm:text-xl text-sm text-white'>Logout</button>
                    </div>
                </div>

                <div className='sm:hidden'>
                    <Menu size={30} onClick={hendleClick} />
                </div>
            </div>
            {mobile ? (
                <div className='sm:hidden h-36 w-full border-2 border-black rounded grid grid-cols-1 divide-y-2 bg-black text-white'>
                    <Link to={"/"} className={menu === "home" ? "underline" : ""} onClick={() => setmenu("home")}>Home</Link>
                    <a href='#menu' className={menu === "menu" ? "underline" : ""} onClick={() => setmenu("menu")}>Menu</a>
                    <a href='#contact' className={menu === "contact" ? "underline" : ""} onClick={() => setmenu("contact")}>Contact us</a>
                    <Link to={"/cart"} className={menu === "cart" ? "underline" : ""} onClick={() => setmenu("cart")}>Cart</Link>
                    <Link to={"/myorder"} className={menu === "myorder" ? "underline" : ""} onClick={() => setmenu("myorder")}>myorder</Link>
                </div>
            ) : (
                <dir></dir>
            )}
        </>
    )
}

export default Navbar
