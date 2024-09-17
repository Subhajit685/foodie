import express from "express"
import { check } from "../middleware/check.js"
import User from "../models/user.modle.js"

const route = express.Router()
route.use(check)

route.post("/add", async (req, res)=>{
    try {
        const user = await User.findById(req.user._id)
        const cartdata = await user.cartData
        if(!cartdata[req.body.id]){
            cartdata[req.body.id] = 1
        }else{
            cartdata[req.body.id] += 1
        }

        await User.findByIdAndUpdate(req.user._id, {cartData : cartdata})
        return res.status(200).json({success : true, message : "Add cart", user :{ ...user._doc}})
    } catch (error) {
        console.log(error)
        return res.status(200).json({success : false, message : "Internal server error"})
    }
})

route.post("/remove", async (req, res)=>{
    try {
        const user = await User.findById(req.user._id)
        const cartdata = await user.cartData
        if(cartdata[req.body.id]>0){
            cartdata[req.body.id] -= 1
        }

        await User.findByIdAndUpdate(req.user._id, {cartData : cartdata})
        return res.status(200).json({success : true, message : "Add cart", user :{ ...user._doc}})
    } catch (error) {
        console.log(error)
        return res.status(200).json({success : false, message : "Internal server error"})
    }
})

route.get("/get", async (req, res)=>{
    try {
        const user = await User.findById(req.user._id)
        return res.status(200).json({success : true, foods : user.cartData})
    } catch (error) {
        console.log(error)
        return res.status(200).json({success : false, message : "Internal server error"})
    }
})


export default route