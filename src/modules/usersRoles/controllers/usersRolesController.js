const UserRoles = require('../model/userRolesModel');

function createUserRole(userRole) {
    return UserRoles.create(userRole);
}

function getAllUserRoles() {
    return UserRoles.findAll();
}

module.exports.getallUserRoles = getAllUserRoles;