const express = require("express");
const router = express.Router();

getHelloWolrd  = async (req, res ) =>{
    console.log('Somebody is sending a hello world');
    return res.status(200).json('Hello world')
}

 module.exports = {
    getHelloWolrd,
}