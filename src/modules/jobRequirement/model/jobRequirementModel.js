const sequelize = require('../../../config/sequelize').init();
const Sequelize = require('sequelize');
const Job = require('../../jobs/models/jobModel');

const JobRequirment = sequelize.define("job_requirments", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    job_id: {
        type: Sequelize.INTEGER,
        references:{
            model:Job,
            key:'id'
        }
    },
    description: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    skills_id: {
        type: Sequelize.INTEGER,
        validate: {
            isInt: true,
        }
    }
}, {
    timestamp: false
});
 Job.hasMany(JobRequirment);
module.exports = JobRequirment;