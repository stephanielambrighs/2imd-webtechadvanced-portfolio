const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "status" : "succes",
        "data": { 
            "message" : "GETTING messages"
        }
    });
});


module.exports = router;