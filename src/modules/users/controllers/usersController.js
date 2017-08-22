const User = require('../model/userModel');

function getAllUser(){
    return  User.findAll();
}

module.exports.getallUser = getAllUser;