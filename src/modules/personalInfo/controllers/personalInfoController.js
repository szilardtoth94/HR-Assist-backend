const PersonalInfo = require('../model/personalInfoModel');
const User = require('../../users/model/userModel');
const Education = require('../../usersEducation/model/userEducationModel');
const WorkExperience = require('../../userWorkExperience/model/userWorExperienceModel');
const Skills = require('../../skils/model/skills');

function createPersonalInfo(persInf) {
    return new Promise((resolve, reject) => {
        User.findOne({
                where: {
                    username: persInf.user.userName
                }
            }
        ).then((data) => {
            if (null === data) {
                PersonalInfo.create(persInf,
                    {
                        include: [
                            {
                                model: User,
                                as: 'user'
                            }]

                    }).then((data) => resolve(data))
                    .catch((err) => reject(err));
            } else reject(new Error("exist"));
        })
            .catch((err) => reject(err));
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
    return PersonalInfo.findById(id, {
        include: [
            {
                model: User,
                as: 'user'
            }]
    });
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
                // through: {
                //     attributes: []
                // },
                model: Skills,
                as: 'skills',
            },
            {
                model: User,
                as: 'user'
            }
        ],

    });
}

function editPersonalInfo(persInf, userId) {
    return PersonalInfo.update(persInf,
        {
            where: {
                id: userId
            },
            include: [{
                model: User,
                as: 'user'
            }]


        });
}

function deletePersonalInfo(userId) {
    return User.destroy({

        where: {
            id: userId,
        },

    });
}

module.exports.createPersonalInfo = createPersonalInfo;
module.exports.getAllPersonalInfo = getAllPersonalInfo;
module.exports.getPersonalInfoById = getPersonalInfoById;
module.exports.getAllPersonalInfoById = getAllPersonalInfoById;
module.exports.editPersonalInfo = editPersonalInfo;
module.exports.deletePersonalInfo = deletePersonalInfo;