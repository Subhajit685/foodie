import jwt from "jsonwebtoken"

export const getToket = (id, res) =>{
    const token = jwt.sign({id}, process.env.SECRET_KEY)

    res.cookie("jwt_token", token, {
        expires : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly : true,
    })
    return token
}
