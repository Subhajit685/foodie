import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const getToket = (id, res) =>{
    const token = jwt.sign({id}, process.env.SECRET_KEY, {expiresIn : "7d"})

    res.cookie("jwt_token", token, {
        maxAge : Date.now() + 24 * 60 * 60 * 1000,
        httpOnly : true,
    })
    return token
}
