function getAllJobs(req,res){
    res.send("Hello all jobs page");
}

function getJobById(req,res){
    var jobId = req.params.id;
    res.send('Hello ' + jobId +  ' job page from jobsRouter!');
}

module.exports.allJobs = getAllJobs;
module.exports.jobById = getJobById;