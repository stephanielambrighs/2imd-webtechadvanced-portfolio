const express = require('express');
const router = express.Router();
const messagesController = require("../../../controllers/api/v1/messages");

//getAll
router.get("/", messagesController.getAll);

//getId
router.get("/:id", messagesController.getId);

//post 
router.post("/", messagesController.create);


module.exports = router;