const JobApply = require('../model/jobApplyModel');
const Users = require('../../users/model/userModel')

function createJobApply(jobApply) {
    return JobApply.create(jobApply);
}

function getUserApplyById(jobId) {
    return JobApply.findAll({
        where: {
            jobId: jobId
        },
        include: Users


    })
}

function deleteJobId(jobApplyId) {
    return JobApply.destroy({
        where: {
            id: jobApplyId
        }
    })
}

module.exports.createJobApply = createJobApply;
module.exports.getUserApplyById = getUserApplyById;
module.exports.deleteJobId = deleteJobId;
