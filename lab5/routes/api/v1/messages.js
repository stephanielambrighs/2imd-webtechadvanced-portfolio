const express = require('express');
const { route } = require('../..');
const router = express.Router();
const messagesController = require("../../../controllers/api/v1/messages");

//getAll
router.get("/", messagesController.getAll);

//getId
router.get("/:id", messagesController.getId);

//post 
router.post("/", messagesController.create);

//put
router.put("/:id", messagesController.update);

// delete
router.delete("/:id" , messagesController.remove);

module.exports = router;