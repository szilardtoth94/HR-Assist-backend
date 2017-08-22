'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const UserEducation = sequelize.define("user_education", {

    scool_name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    graduated_year: {
        type: Sequelize.INTEGER
    },

    description: {
        type: Sequelize.STRING(45)
    }
}, {
    timestamp: false,
});
module.exports = UserEducation;