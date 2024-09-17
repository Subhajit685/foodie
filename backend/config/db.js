import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const dbconnection = async () =>{
    try {     
        await mongoose.connect(process.env.MONDO_URL)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}