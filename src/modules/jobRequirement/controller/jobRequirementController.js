'use strict';
let Skills = require('../../skils/model/skills');
let JobRequirement = require('../model/jobRequirementModel');
let Jobs = require('../../jobs/models/jobModel');
function getAllJobRequirement() {
    return JobRequirement.findAll(

        {
            include: [{
                model: Jobs
            }, {
                model: Skills
            }]
        }
    );
}

module.exports.getAllJobRequirment = getAllJobRequirement;