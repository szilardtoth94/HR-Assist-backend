const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Education = require('../../usersEducation/model/userEducationModel');

const PersonalInfo = sequelize.define("personal_info", {
    firstName: {
        type: Sequelize.STRING(45),
        field:'first_name',
        validate: {
            len: [0, 44]
        },

    },
    lastName: {
        field:"last_name",
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }

    },

    description: {
        field:'description',
        type: Sequelize.STRING(45),
    }
});

PersonalInfo.hasMany(Education,{
    foreignKey:'personal_info_id'
});

module.exports = PersonalInfo;