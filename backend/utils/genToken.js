import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const getToket = (id, res) =>{
    const token = jwt.sign({id}, process.env.SECRET_KEY)

    res.cookie("jwt_token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use secure flag only in production
        sameSite: "Strict",  // Explicitly set SameSite to None for cross-site requests
    });
    
    return token
}
