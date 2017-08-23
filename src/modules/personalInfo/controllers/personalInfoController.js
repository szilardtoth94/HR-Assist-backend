const PersonalInfo = require('../model/personalInfoModel');
const User = require('../../users/model/userModel');
const Education = require('../../usersEducation/model/userEducationModel');

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
                model: Education
            }
        ]
    });
}

module.exports.getAllPersonalInfo = getAllPersonalInfo;
module.exports.getPersonalInfoById = getPersonalInfoById;
module.exports.getAllPersonalInfoById = getAllPersonalInfoById;