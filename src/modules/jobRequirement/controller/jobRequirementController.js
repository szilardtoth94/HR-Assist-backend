'use strict';
let JobRequirement = require('../model/jobRequirementModel');

function createJobSkills(jobSkill) {
    return JobRequirement.create(jobSkill);
}

function getJobSkillsByPersId(jobId) {
    return JobRequirement.findAll({
        where: {
            jobId: jobId
        }
    });
}

function getAllJobRequirement() {
    return JobRequirement.findAll();
}

function deleteJobSkill(jobSkillId) {
    console.log(jobSkillId);
    return JobRequirement.destroy({
        where: {
            id: jobSkillId
        },
    });
}

module.exports.createJobSkills = createJobSkills;
module.exports.getJobSkillsByPersId = getJobSkillsByPersId;
module.exports.getAllJobRequirment = getAllJobRequirement;
module.exports.deleteJobSkill = deleteJobSkill;