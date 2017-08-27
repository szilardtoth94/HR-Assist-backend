'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const UserRoles = require('../../usersRoles/model/userRolesModel');
const PersonalInfo = require('../../personalInfo/model/personalInfoModel');

const User = sequelize.define("users", {
    userName: {
        field: 'username',
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
    lastLogin: {
        field: 'last_login',
        type: Sequelize.DATE
    }
});

User.belongsTo(UserRoles, {
    foreignKey: {
        name: 'userRoleId',
        field: 'user_role_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

User.hasOne(PersonalInfo, {
    foreignKey: {
        name: 'usersId',
        field: 'users_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

PersonalInfo.belongsTo(User, {
    foreignKey: {
        name: 'usersId',
        field: 'users_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

module.exports = User;