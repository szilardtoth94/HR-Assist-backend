
function getAllUser(req,res){
    res.send("Hello all jobs page");
}

function getUserById(req,res){
    var userId = req.params.id;
    res.send('Hello ' + userId +  ' user page from jobsRouter!');
}

function newUser(req,res){
    console.log('name:',req.body.name)
    res.send('OK');
}

module.exports.allUser = getAllUser;
module.exports.userById = getUserById;
module.exports.newUser =newUser;