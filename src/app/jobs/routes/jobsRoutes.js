const express = require('express');
const jobsRouter = express.Router();

const userCtrl = require('../controllers/jobsController');

var router = function (connection) {

    jobsRouter.route('/').get(
        function(req,res){
            res.send(userCtrl.allJobs());
    });

    jobsRouter.route('/:id')
        .get(function (req,res) {
            res.send(userCtrl.jobById(req.params.id));
    });

    return jobsRouter;
}

module.exports = router;