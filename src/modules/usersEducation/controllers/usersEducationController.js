const UserEducation = require('../model/userEducationModel');

function createUserEcucation(userEducation) {
    return UserEducation.create(userEducation);
}

function getAllUserEducation() {
    return UserEducation.findAll();
}

function getEducationById(educationId) {
    return UserEducation.findById(educationId);
}

function updateEducation(education, id) {
    return UserEducation.update(education, {
        where: {
            id: id
        }
    });
}

function deleteEducation(educationId) {
    return UserEducation.destroy({
        where: {
            id: educationId
        }
    });
}

module.exports.createUserEcucation = createUserEcucation;
module.exports.getAllUserEducation = getAllUserEducation;
module.exports.getEducationById = getEducationById;
module.exports.updateEducation = updateEducation;
module.exports.deleteEducation = deleteEducation;