const UserRoles = require('../model/userRolesModel');

function getAllUserRoles(){
    return  UserRoles.findAll();
}

module.exports.getallUserRoles = getAllUserRoles;