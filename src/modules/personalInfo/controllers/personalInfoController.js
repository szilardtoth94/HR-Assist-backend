const PersonalInfo = require('../model/personalInfoModel');
const User = require('../../users/model/userModel');
const Education = require('../../usersEducation/model/userEducationModel');
const WorkExperience = require('../../userWorkExperience/model/userWorExperienceModel');
const Skills = require('../../skils/model/skillsModel');

function createPersonalInfo(persInf) {
    return PersonalInfo.create(persInf,
        {
            include: [
                {
                    model: User,
                    as: 'user'
                }]
        });
}

function getAllPersonalInfo() {
    return PersonalInfo.findAll({
        include: [
            {
                model: User,
                as: 'user'
            }]
    });
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
                through: {
                    attributes: []
                },
                model: Skills,
                as: 'skills',
                // attributes: { exclude: ['user_skills'] }
            }
        ],

    });
}

function deletePersonalInfo(userId) {
    return User.destroy({

        where: {
            id: userId,
        },

    });
}


module.exports.getAllPersonalInfo = getAllPersonalInfo;
module.exports.getPersonalInfoById = getPersonalInfoById;
module.exports.getAllPersonalInfoById = getAllPersonalInfoById;
module.exports.deletePersonalInfo = deletePersonalInfo;
module.exports.createPersonalInfo = createPersonalInfo;