import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/user.modle.js"
dotenv.config()

export const check = async(req, res, next) =>{
    try {
        const token = req.cookies["jwt_token"]
        if(!token){
            return res.status(401).json({ success: false, message: "Unauthorizad - token not found" })
        }

        const userID = jwt.verify(token, process.env.SECRET_KEY)

        if(!userID){
            return res.status(401).json({ success: false, message: "Unauthorizad - token not found" })
        }

        const user = await User.findById(userID.id).select("-password")

        req.user = user
        next()
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}