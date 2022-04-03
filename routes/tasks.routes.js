const express = require("express");
const router = express.Router();
const controller = require('../controllers/task.controllers.js')

router.get('/HelloWorld', controller.getHelloWolrd)
router.get('/tasks', controller.getTasks);
router.get('/tasks/:id', controller.getTask);
router.put('/tasks', controller.saveTask);
router.get('/tasks/count', controller.countTaks);
router.delete('/tasks/:id', controller.deleteTask);

module.exports = router;