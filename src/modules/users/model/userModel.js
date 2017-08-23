'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const UserRoles = require('../../usersRoles/model/userRolesModel');
const PersonalInfo = require('../../personalInfo/model/personalInfoModel');

const User = sequelize.define("users", {

    username: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    password: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },

    last_login: {
        type: Sequelize.DATE
    }
}, {
    timestamp: false,


});

User.hasMany(UserRoles, {
    foreignKey: 'user_role_id'
});



module.exports = User;