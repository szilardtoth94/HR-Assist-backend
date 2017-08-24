let Jobs = require('../models/jobModel');
let JobRequirment = require('../../jobRequirement/model/jobRequirementModel');
const Skill = require('../../skils/model/skillsModel');
function createJob(job) {
    return Jobs.create(job);
}

function getAllJobs() {
    return Jobs.findAll();
}

function getAllJobsWithRequirements() {
    return Jobs.findAll({
            include: [

                {
                    model:Skill
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
module.exports.getAllJobsWithRequirements=getAllJobsWithRequirements;