'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const UserEducation = sequelize.define("user_education", {
    schoolName: {
        field: 'scool_name',
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    graduatedYear: {
        field: 'graduated_year',
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    }
});

module.exports = UserEducation;