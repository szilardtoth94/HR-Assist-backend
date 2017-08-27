const UserRoles = require('../model/userRolesModel');

function createUserRole(userRole) {
    return UserRoles.create(userRole);
}

function getAllUserRoles() {
    return UserRoles.findAll();
}

module.exports.createUserRole = createUserRole;
module.exports.getallUserRoles = getAllUserRoles;