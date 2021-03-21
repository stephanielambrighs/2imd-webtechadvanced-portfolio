
const getAll = (req, res) => {
    res.json({
        "status" : "success",
        "data": { 
            "message" : "GETTING messages"
        }
    });
};

const getId = (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message" : 'GETTING message with ID = ' + req.params.id
        }
    });
};

const create = (req, res) => {
    //fix dynamic name

    res.json({
        "status" : "success",
        "data" : {
            "message" : "POSTING a new message for user " 
        },
        "body" : {
            "message" : {
                "user" : "Pikachu", 
                "text" : "nodejs isn’t hard, or is it?"
            }
        }
    });
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;