
const getAll = (req, res) => {
    res.json({
        "status" : "succes",
        "data": { 
            "message" : "GETTING messages"
        }
    });
};

const getId = (req, res) => {
    res.json({
        "status" : "succes",
        "data" : {
            "message" : 'GETTING message with ID = ' + req.params.id
        }
    });
};

module.exports.getAll = getAll;
module.exports.getId = getId;