const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Skills = require('../../skils/model/skills');
const Jobs = require('../../jobs/models/jobModel');

const JobRequirement = sequelize.define("job_requirments", {

    description: {
        type: Sequelize.TEXT,
    }
});

JobRequirement.belongsTo(Skills, {
    foreignKey: 'skills_id'
});

JobRequirement.belongsTo(Jobs, {
    foreignKey: 'job_id'
});

// Jobs.hasMany(JobRequirement,{
//     foreignKey:'job_id'
// });

module.exports = JobRequirement;