import express from "express"
import User from "../models/user.modle.js"
import validator from "validator"
import bcryptjs from "bcryptjs"
import { getToket } from "../utils/genToken.js"
import { check } from "../middleware/check.js"

const route = express.Router()

route.post("/singup", async(req, res)=>{
    const {name, email, password} = req.body
    try {
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({success: false, message : "User allready exite"})
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({success : false, message : "Please enter valid email"})
        }
        if(password.length<8){
            return res.status(400).json({success : false, message : "Password should be 8 character"})
        }

        const haspassword = await bcryptjs.hash(password, 10)

        const newuser = await User({
            name,
            email,
            password : haspassword
        })

        getToket(newuser._id, res)
        await newuser.save()

        return res.status(200).json({success : true, user : {
            ...newuser,
            password : undefined
        }})

    } catch (error) {
        console.log("sing up", error)
        return res.status(500).json({success: false, message : "Internal server errer"})
    }
})

route.post("/login", async(req, res)=>{
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success: false, message : "User not found"})
        }

        const matchpassword = await bcryptjs.compare(password, user.password)
        if(!matchpassword){
            return res.status(400).json({success: false, message : "Invalid crenditial"})
        }
        getToket(user._id, res)
        return res.status(200).json({success : true, user : {
            ...user._doc,
            password : undefined
        }})
    } catch (error) {
        console.log("sing up", error)
        return res.status(500).json({success: false, message : "Internal server errer"})
    }
})

route.get("/logout", (req, res)=>{
    try {
        res.clearCookie("jwt_token")
        return res.status(200).json({success : true, message : "Logout successfully"})
    } catch (error) {
        console.log("sing up", error)
        return res.status(500).json({success: false, message : "Internal server errer"})
    }
})

route.get("/auth", check, async(req, res)=>{
    try {
        return res.status(200).json({success : true, user : req.user})
    } catch (error) {
        console.log("logout : "+error.message)
        return res.status(500).json({success : false, message : "Internal server error"})
    }
})

export default route