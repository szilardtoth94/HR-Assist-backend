const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const Skills =require('../../skils/model/skillsModel');
const Jobs =require('../../jobs/models/jobModel');

const JobRequirment = sequelize.define("job_requirments", {

    description: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    }
}, {
    timestamp: false,
    associate: function (Job) {
        JobRequirment.belongsTo(Job, {
            foreignKey: 'id'
        })


    },

    // associate2: function (Skills) {
    //
    //     JobRequirment.belongsTo(Skills, {
    //        foreignKey: 'id',
    //     })
    // }

});
JobRequirment.belongsTo(Skills,{
    foreignKey:'skills_id'
});

JobRequirment.belongsTo(Jobs,{
    foreignKey:'job_id'
});


module.exports = JobRequirment;