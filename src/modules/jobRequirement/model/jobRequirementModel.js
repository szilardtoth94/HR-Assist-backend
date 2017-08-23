const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const Skills = require('../../skils/model/skillsModel');
const Jobs = require('../../jobs/models/jobModel');

const JobRequirment = sequelize.define("job_requirments", {

    description: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    }
});
JobRequirment.belongsTo(Skills, {
    foreignKey: 'skills_id'
});

JobRequirment.belongsTo(Jobs, {
    foreignKey: 'job_id'
});

// Jobs.hasMany(JobRequirment,{
//     foreignKey:'job_id'
// });
module.exports = JobRequirment;