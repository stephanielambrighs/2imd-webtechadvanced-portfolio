
const getAll = (req, res) => {
    res.json({
        "status" : "succes",
        "data": { 
            "message" : "GETTING messages"
        }
    });
};

module.exports.getAll = getAll;