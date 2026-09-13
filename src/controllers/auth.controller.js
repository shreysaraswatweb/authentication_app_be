//API Logic likhne ke liye

const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')


async function registerUser(req, res) {
    const {username, email, password} = req.body
    const isUserAlreadyExist = await userModel.findOne({
        email
    })
    
    if (isUserAlreadyExist) {
        //409 is a status code for conflict, means user already exists
        return res.status(409).json({
            message: "User already exists"
        })
    }

    const user = await userModel.create({
        username, email, password
    })
    //create JWT token in token and returns it to user as response
    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET) 

    res.cookie("chachaTokenLelo", token);
    res.status(201).json({
        message:"User registered successfully",
        user,
    })

}

module.exports = {registerUser};