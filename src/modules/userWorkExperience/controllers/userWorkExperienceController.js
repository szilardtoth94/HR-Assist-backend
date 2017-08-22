const UserWorkEperience = require('../model/userWorExperienceModel');

function getAllUserWorkEperience() {
    return UserWorkEperience.findAll();
}

module.exports.getAllUserWorkEperience = getAllUserWorkEperience;