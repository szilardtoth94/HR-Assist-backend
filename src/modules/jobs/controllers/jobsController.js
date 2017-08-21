let Jobs = require('../models/jobModel');

function createJob(job) {
    return Jobs.create(job);
}

function getAllJobs() {
    return Jobs.findAll();
}

function getJobById(jobId) {
    return Jobs.findById(jobId);
}

function deleteJob(jobId) {
    return Jobs.destroy({
        where: {
            id: jobId
        }
    });
}

function updateJob(job) {
    return Jobs.update(job, {
        where: {
            id: job.id
        }
    });
}

module.exports.allJobs = getAllJobs;
module.exports.jobById = getJobById
module.exports.createJob = createJob;
module.exports.deleteJob = deleteJob;
module.exports.updateJob = updateJob;