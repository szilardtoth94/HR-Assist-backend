const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Education = require('../../usersEducation/model/userEducationModel');
const WorkExperience = require('../../userWorkExperience/model/userWorExperienceModel');
const Skills = require('../../skils/model/skills');

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
        type: Sequelize.TEXT,
    }
});

PersonalInfo.hasMany(Education, {
    foreignKey: {
        name: 'personalInfoId',
        field: 'personal_info_id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'userEducation'
});

PersonalInfo.hasMany(WorkExperience, {
    foreignKey: {
        name: 'personInfoId',
        field: 'personal_info_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
    as: 'workExperience'
});

PersonalInfo.belongsToMany(Skills, {
    through: {
        model: 'user_skills',
    },
    foreignKey: {
        name: 'personalInfoId',
        field: 'personal_info_id'
    },
    primaryKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

Skills.belongsToMany(PersonalInfo, {
    through: {
        model: 'user_skills',
    },
    foreignKey: {
        name: 'skillsId',
        field: 'skills_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});
module.exports = PersonalInfo;