import express from "express"
import multer from "multer"
import FoodModel from "../models/food.model.js"
import fs from 'fs'

const route = express.Router()

const storage = multer.diskStorage({
    destination : "uploads",
    filename : (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

route.post("/add", upload.single("image"), async(req, res)=>{
    try {
        const newfood = new FoodModel({
            name : req.body.name,
            price : req.body.price,
            discription : req.body.discription,
            image : req.file.filename,
            catagory : req.body.catagory
        })
        await newfood.save()
        return res.status(200).json({success : true, message : "Add food successfully"})
    } catch (error) {
        console.log("food add", error)
        return res.status(500).json({success : false, message : "Internal server error"})
        
    }
})

route.get("/item", async(req, res)=>{
    try {
        const foods = await FoodModel.find({})
        return res.status(200).json({success: true, data : foods})
    } catch (error) {
        console.log("sohwfood", error)
        return res.status(500).json({success: false, message: "Internal server error"})
    }
})

route.post("/delete", async(req, res)=>{
    try {
        const food = await FoodModel.findById(req.body.id)
        if(!food){
            return res.status(400).json({success : false, message : 'Food not foound'})
        }
        fs.unlink(`uploads/${food.image}`,()=>{})
        await FoodModel.findByIdAndDelete(req.body.id)
        return res.status(200).json({success: true, message: "Deleted successfully"})
    } catch (error) {
        console.log("Deletefood", error)
        return res.status(500).json({success: false, message: "Internal server error"})
    }
})

export default route