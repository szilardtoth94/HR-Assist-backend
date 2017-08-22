const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Job = require('../../jobs/models/jobModel');

const JobRequirment = sequelize.define("job_requirments", {


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
    timestamp: false,
    associate: function (Job) {
        JobRequirment.belongsTo(Job, {
            foreignKey: 'id'
        })
    }

});

// JobRequirment.belongsTo(Job,{
//     foreignKey:'job_id'
// });

module.exports = JobRequirment;