const PersonalInfo = require('../model/personalInfoModel');

function getAllPersonalInfo() {
    return PersonalInfo.findAll();
}

module.exports.getAllPersonalInfo = getAllPersonalInfo;