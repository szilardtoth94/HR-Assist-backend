const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Education = require('../../usersEducation/model/userEducationModel');
const WorkExperience = require('../../userWorkExperience/model/userWorExperienceModel')
const Skills = require('../../skils/model/skillsModel');

const PersonalInfo = sequelize.define("personal_info", {
    firstName: {
        type: Sequelize.STRING(45),
        field: 'first_name',
        validate: {
            len: [0, 44]
        },

    },
    lastName: {
        field: "last_name",
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }

    },

    description: {
        field: 'description',
        type: Sequelize.STRING(45),
    }
});

PersonalInfo.hasMany(Education, {
    foreignKey: {
        name: 'personalInfoId',
        field: 'personal_info_id'
    },
    as: 'userEducation'
});

PersonalInfo.hasMany(WorkExperience, {
    foreignKey: {
        name: 'personInfoId',
        field: 'personal_info_id'
    },
    as: 'workExperience'
});

PersonalInfo.belongsToMany(Skills, {
    through: 'user_skills',
    foreignKey: 'personal_info_id'
});

Skills.belongsToMany(PersonalInfo, {
    through: 'user_skills',
    foreignKey: 'skills_id'
});

module.exports = PersonalInfo;