import express from "express"
import { check } from "../middleware/check.js"
import Order from "../models/ordermodel.js"
import User from "../models/user.modle.js"


const route = express.Router()

route.post("/order", check, async (req, res)=>{
    try {
        const neworder = await Order({
            userId : req.user._id,
            items : req.body.items,
            amount : req.body.amount,
            address : req.body.address,
        })

        await neworder.save()
        await User.findByIdAndUpdate(req.user._id, {cartData: {}})
        return res.status(200).json({success : true, order : neworder})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success : false, order : "Internal server error"})
    }
})

route.post("/showOrder", check, async(req, res)=>{
    try {
        const response = await Order.find({userId:req.user._id})
        return res.status(200).json({success: true, data : response})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success : false, order : "Internal server error"})
    }
})

route.get("/list", async (req, res)=>{
    try {
        const response = await Order.find({})
        return res.status(200).json({success : true, data: response})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success : false, order : "Internal server error"})
    }
})

route.post("/status", async(req, res)=>{
    try {
        await Order.findByIdAndUpdate(req.body.id, {status : req.body.status})
        return res.status(200).json({success: true, message : "Status updated"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success : false, order : "Internal server error"})
    }
})

export default route