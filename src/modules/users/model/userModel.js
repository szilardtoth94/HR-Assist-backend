
'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

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

module.exports = User;