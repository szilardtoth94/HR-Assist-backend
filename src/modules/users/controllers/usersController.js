const User = require('../model/userModel');
const UserRoles = require('../../usersRoles/model/userRolesModel');

function getAllUser() {
    return User.findAll({
        include: {
            model: UserRoles
        }
    });
}

function logIn(username, password) {
    return User.findOne({
        where: {
            userName: username,
            password: password
        }
    })
}

module.exports.getallUser = getAllUser;
module.exports.logIn = logIn;