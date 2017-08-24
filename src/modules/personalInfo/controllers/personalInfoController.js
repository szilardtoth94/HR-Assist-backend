const PersonalInfo = require('../model/personalInfoModel');
const User = require('../../users/model/userModel');
const Education = require('../../usersEducation/model/userEducationModel');
const WorkExperience = require('../../userWorkExperience/model/userWorExperienceModel');
const Skills = require('../../skils/model/skillsModel');

function getAllPersonalInfo() {
    return PersonalInfo.findAll();
}

function getPersonalInfoById(id) {
    return PersonalInfo.findById(id);
}

function getAllPersonalInfoById(id) {
    return PersonalInfo.findById(id, {
        include: [
            {
                model: Education,
                as: 'userEducation'
            },
            {
                model: WorkExperience,
                as: 'workExperience'
            },
            {
                model: Skills,
                as: 'skills'
            }
        ]
    });
}

module.exports.getAllPersonalInfo = getAllPersonalInfo;
module.exports.getPersonalInfoById = getPersonalInfoById;
module.exports.getAllPersonalInfoById = getAllPersonalInfoById;