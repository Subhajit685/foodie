import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    discription : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    catagory : {
        type : String,
        required : true
    }
})

const FoodModel = mongoose.model("FoodModel", foodSchema)

export default FoodModel