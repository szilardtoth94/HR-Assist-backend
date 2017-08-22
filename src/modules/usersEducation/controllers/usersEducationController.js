const UserEducation = require('../model/userEducationModel');

function getAllUserEducation() {
    return UserEducation.findAll();
}

module.exports.getAllUserEducation = getAllUserEducation;