const UserWorkExperience = require('../model/userWorExperienceModel');

function createUserWorkExperience(userUserWorkExperience) {
    return UserWorkExperience.create(userUserWorkExperience);
}

function getAllUserWorkExperience() {
    return UserWorkExperience.findAll();
}

function getUserWorkExperienceById(userUserWorkExperienceId) {
    return UserWorkExperience.findById(userUserWorkExperienceId);
}

function updateUserWorkExperience(experience, id) {
    return UserWorkExperience.update(experience, {
        where: {
            id: id
        }
    });
}

function deleteUserWorkExperience(userWorkExperienceId) {
    return UserWorkExperience.destroy({
        where: {
            id: userWorkExperienceId
        }
    });
}

module.exports.createUserWorkExperience = createUserWorkExperience;
module.exports.getAllUserWorkExperience = getAllUserWorkExperience;
module.exports.getUserWorkExperienceById = getUserWorkExperienceById;
module.exports.updateUserWorkExperience = updateUserWorkExperience;
module.exports.deleteUserWorkExperience = deleteUserWorkExperience;