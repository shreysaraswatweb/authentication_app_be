//Auth API ek sath ek jagah likhne ke liye
// we again create express like app.js here 
//we didnt add logic in this file 
const express = require('express');
const  authController = require("../controllers/auth.controller");
const router = express.Router(); // we create further api with the help of router 

//POST API /api/auth/register
router.post("/register", authController.registerUser)

module.exports= router;