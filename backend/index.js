import express from 'express'
import { dbconnection } from './config/db.js'
import foodRoute from "./routes/food.js"
import userRoute from "./routes/user.route.js"
import cartRoute from "./routes/cart.js"
import orderRoute from "./routes/orderroute.js"
import cors from "cors"
import cookieParser from 'cookie-parser'


const PORT = process.env.PORT || 4000
const app = express()
dbconnection()


app.use(cors({
    origin:["https://foodie-frontend-5avz.onrender.com", "https://foodie-admin-3qzk.onrender.com"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/food", foodRoute)
app.use("/api/user", userRoute)
app.use("/api/cart", cartRoute)
app.use("/api/order", orderRoute)
app.use("/images", express.static("uploads"))

app.get("/", (req, res)=>{
    res.send("hii")
})

app.listen(PORT, ()=>{
    console.log("server connected at "+ PORT)
})



