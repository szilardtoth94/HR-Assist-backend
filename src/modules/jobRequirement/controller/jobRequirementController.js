'use strict';
let Skills = require('../../skils/model/skills');
let JobRequirment = require('../model/jobRequirementModel');
let Jobs = require('../../jobs/models/jobModel');


function getAllJobRequirment() {
    return JobRequirment.findAll(
        {
            include: [{
                model: Jobs
            }, {
                model: Skills
            }]
        }
    );
}

module.exports.getAllJobRequirment = getAllJobRequirment;