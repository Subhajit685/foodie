import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from 'axios'
import toast from "react-hot-toast"

export const storeContext = createContext(null)

const ContextProvider = (props) => {

    const [user, setuser] = useState(null)

    const [food_list, setfood_list] = useState([])

    const url = "https://foodie-6t6t.onrender.com"

    const [count, setcount] = useState({})

    const [isSingup, setisSingup] = useState(false)
    const [islogin, setislogin] = useState(false)

    const getfood = async () => {
        try {
            const res = await axios.get(`${url}/api/food/item`, { withCredentials: true })
            setfood_list(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const singup = async (data) => {
        setisSingup(true)
        try {
            const res = await axios.post(`${url}/api/user/singup`, data, { withCredentials: true })
            toast.success("Account created successfully")
            setuser(res.data.user)
            setisSingup(false)
        } catch (error) {
            console.log(error)
            setisSingup(false)
            toast.error(error.response.data.message)
        }
    }
    const login = async (data) => {
        setislogin(true)
        try {
            const res = await axios.post(`${url}/api/user/login`, data, { withCredentials: true })
            toast.success("Login successfully")
            setuser(res.data.user)
            setislogin(false)
        } catch (error) {
            console.log(error)
            setislogin(false)
            toast.error(error.response.data.message)
        }
    }

    const logout = async () => {
        try {
            const res = await axios.get(`${url}/api/user/logout`, { withCredentials: true })
            setuser(null)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error)
            setislogin(false)
            toast.error(error.response.data.message)
        }
    }

    const check = async () => {
        try {
            const res = await axios.get(`${url}/api/user/auth`, { withCredentials: true })
            setuser(res.data.user)
        } catch (error) {
            console.log(error)
            setuser(null)
        }
    }


    const additem = async (id) => {
        if (!count[id]) {
            setcount((prev) => ({ ...prev, [id]: 1 }))
        }
        else {
            setcount((prev) => ({ ...prev, [id]: prev[id] + 1 }))
        }
        await axios.post(`${url}/api/cart/add`, { id }, { withCredentials: true })
    }

    const removeitem = async (id) => {
        setcount((prev) => ({ ...prev, [id]: prev[id] - 1 }))
        await axios.post(`${url}/api/cart/remove`, { id }, { withCredentials: true })
    }

    const gettotalamount = () => {
        let totalamount = 0;
        for (const item in count) {
            if (count[item] > 0) {
                const iteminfo = food_list.find((product) => product._id === item)
                totalamount += iteminfo.price * count[item]
            }
        }

        return totalamount
    }

    const setcart = async () =>{
        try {
            const res = await axios.get(`${url}/api/cart/get`, {withCredentials:true})
            setcount(res.data.foods)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getfood()
    }, [])

    useEffect(()=>{
        setcart()
    }, [])

    const contextvalu = {
        food_list,
        count,
        setcount,
        additem,
        removeitem,
        gettotalamount,
        singup,
        isSingup,
        url,
        login,
        islogin,
        user,
        logout,
        check,
    }
    return (
        <storeContext.Provider value={contextvalu}>
            {props.children}
        </storeContext.Provider>
    )
}

export default ContextProvider
