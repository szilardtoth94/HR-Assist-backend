let Jobs = require('../models/jobModel');
let JobRequirment = require('../../jobRequirement/model/jobRequirementModel');

function createJob(job) {
    return Jobs.create(job);
}

function getAllJobs() {
    Jobs.options.associate(JobRequirment);
    JobRequirment.options.associate(Jobs);

    return Jobs.findAll({
            include: [
                {
                    model: JobRequirment,
                    as: 'job_requirments'
                }
            ]
        }
    );
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