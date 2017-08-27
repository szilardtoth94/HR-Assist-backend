const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Skills = require('../../skils/model/skills');
const Jobs = require('../../jobs/models/jobModel');

const JobRequirement = sequelize.define("job_requirments", {});

JobRequirement.belongsTo(Skills, {
    foreignKey: {
        name: 'skillsId',
        field: 'skills_id'
    },
});

JobRequirement.belongsTo(Jobs, {
    foreignKey: {
        name: 'jobId',
        field: 'job_id'
    },
});

module.exports = JobRequirement;