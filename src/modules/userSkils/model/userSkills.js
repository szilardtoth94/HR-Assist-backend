const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const Skills = sequelize.define("user_skills", {

    personalInfoId: {
        field:'personal_info_id',
        type: Sequelize.INTEGER,
        validate: {
            len: [0, 44]
        }
    },
    skillsId: {
        field:'skills_id',
        type: Sequelize.INTEGER,
    }
});


module.exports = Skills;