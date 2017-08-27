const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const UserSkills = sequelize.define("user_skills", {
    personalInfoId: {
        field:'personal_info_id',
        type: Sequelize.INTEGER,
    },
    skillsId: {
        field:'skills_id',
        type: Sequelize.INTEGER,
    }
});

module.exports = UserSkills;