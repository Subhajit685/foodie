import express from 'express'
import { dbconnection } from './config/db.js'
import foodRoute from "./routes/food.js"
import userRoute from "./routes/user.route.js"
import cartRoute from "./routes/cart.js"
import orderRoute from "./routes/orderroute.js"
import cors from "cors"
import cookieParser from 'cookie-parser'
import path from "path"
import dotenv from "dotenv"


dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()
dbconnection()


app.use(cors({
    origin:["https://foodie-frontend-5avz.onrender.com", "https://foodie-admin-3qzk.onrender.com"],
    credentials:true,
    methods : ["POST", "GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/food", foodRoute)
app.use("/api/user", userRoute)
app.use("/api/cart", cartRoute)
app.use("/api/order", orderRoute)
app.use("/images", express.static("uploads"))

const __dirname = path.resolve()


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}


app.listen(PORT, ()=>{
    console.log("server connected at "+ PORT)
})



