const Jobs = require('../models/jobModel');
const Skill = require('../../skils/model/skills');

function createJob(job) {
    return Jobs.create(job);
}

function getAllJobs() {
    return Jobs.findAll();
}

function getJobById(jobId) {
    return Jobs.findById(jobId,{
        include: [
            {
                model: Skill
            }
        ]
    });
}

function updateJob(jobId,job) {
    return Jobs.update(job, {
        where: {
            id: jobId
        }
    });
}

function deleteJob(jobId) {
    return Jobs.destroy({
        where: {
            id: jobId
        }
    });
}

module.exports.getAllJobs = getAllJobs;
module.exports.jobById = getJobById;
module.exports.createJob = createJob;
module.exports.updateJob = updateJob;
module.exports.deleteJob = deleteJob;