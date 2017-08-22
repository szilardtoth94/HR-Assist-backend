'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const UserWorkExperience = sequelize.define("user_work_experience", {

    company_name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    position: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },

    start_date: {
        type: Sequelize.DATE
    },

    end_date: {
        type: Sequelize.DATE
    }
}, {
    timestamp: false,
});
module.exports = UserWorkExperience;