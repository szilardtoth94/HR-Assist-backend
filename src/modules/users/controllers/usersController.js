const User = require('../model/userModel');
const UserRoles = require('../../usersRoles/model/userRolesModel');

function getAllUser() {
    return User.findAll({
        include: {
            model: UserRoles
        }
    });
}

module.exports.getallUser = getAllUser;