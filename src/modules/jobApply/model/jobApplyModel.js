const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

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

module.exports = JobApply;