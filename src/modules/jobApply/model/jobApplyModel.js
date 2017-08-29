const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Users =require('../../users/model/userModel')
const JobApply = sequelize.define("job_apply", {
    jobId: {
        field:'job_id',
        type: Sequelize.INTEGER,
    },
    userId: {
        field:'user_id',
        type: Sequelize.INTEGER,
    }
});

JobApply.belongsTo(Users, {
    foreignKey: {
        name: 'userId',
        field: 'user_id'
    },
});
module.exports = JobApply;