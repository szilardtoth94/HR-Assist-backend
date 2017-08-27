const express = require('express');
const jobsRouter = express.Router();
const jobsCtrl = require('../controllers/jobsController');

let router = function (connection) {
    jobsRouter.route('/')
        .get(function (req, res) {
            jobsCtrl.getAllJobsWithRequirements()
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    });
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error.toString()
                    });
                });
        })
        .post(function (req, res) {
            let job = req.body;
            console.log(req.body);
            jobsCtrl.createJob(job)
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    })
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error
                    })

                })
        })
        .put(function (req, res) {
            let job = req.body;
            jobsCtrl.updateJob(job)
                .then(result => {
                    res.json({
                        success: true,
                        data: result
                    })
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error
                    })

                })

        });

    jobsRouter.route('/:id')
        .get(function (req, res) {
            let jobId = req.params.id;
            jobsCtrl.jobById(jobId)
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    });
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error
                    })
                })
        })
        .delete(function (req, res) {
            let jobId = req.params.id;
            jobsCtrl.deleteJob(jobId)
                .then(result => {
                    res.json({
                        success: true,
                        data: result
                    })
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error
                    })

                })
        });
    return jobsRouter;
};

module.exports = router;