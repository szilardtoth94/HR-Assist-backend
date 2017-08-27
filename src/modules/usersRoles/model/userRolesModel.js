const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const UserRoles = sequelize.define("user_roles", {
    code: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    description: {
        type: Sequelize.TEXT,
    }
});

module.exports = UserRoles;