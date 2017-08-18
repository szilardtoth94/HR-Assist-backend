var mysql  = require('../../../config/mysql');
connection = mysql.connection();

function getAllJobs(){
    this.connection.query("SELECT * FROM user_roles",function (error,result,fileds) {
        console.log(result)
    });
    return "All jobs";
}

function getJobById(id){
    return ('Hello ' + id +  ' job page from jobsRouter!');
}

module.exports.allJobs = getAllJobs;
module.exports.jobById = getJobById;