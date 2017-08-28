const JobApply = require('../model/jobApplyModel');

function createJobApply(jobApply) {
    return JobApply.create(jobApply);
}

function getJobApplyById(jobId) {
    return JobApply.findAll({
        where: {
            jobId: jobId
        }
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
module.exports.getJobApplyById = getJobApplyById;
module.exports.deleteJobId = deleteJobId;
