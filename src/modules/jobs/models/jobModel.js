'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const JobRequirment = require('../../jobRequirement/model/jobRequirementModel');

const Jobs = sequelize.define("jobs", {

    name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    description: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    benefits: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 44]
        }
    },
    code: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 44]
        }
    }
}, {
    timestamp: false,
    associate: function (JobRequirment) {
        Jobs.hasMany(JobRequirment, {
            foreignKey: 'job_id',
        })
    }

});

module.exports = Jobs;