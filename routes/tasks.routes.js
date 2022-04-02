const express = require("express");
const router = express.Router();
const controller = require('../controllers/task.controllers.js')

 router.get('/',  controller.getHelloWolrd)

 module.exports = router;