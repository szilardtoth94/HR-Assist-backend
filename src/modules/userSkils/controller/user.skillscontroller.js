let UserSkills = require('../model/userSkills');


function createUserSkills(userSkill) {
    return UserSkills.create(userSkill);
}

function getUserSkills() {
    return UserSkills.findAll();
}

function deleteUserSkill(userSkillId) {
    return UserSkills.destroy({
        where: {
            id: userSkillId,
        },

    });

}

module.exports.createUserSkills = createUserSkills;
module.exports.getUserSkills = getUserSkills;
module.exports.deleteUserSkill= deleteUserSkill;
