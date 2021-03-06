const express = require('express');
const jobsRouter = express.Router();
const jobsCtrl = require('../controllers/jobsController');

let router = function (role) {
    jobsRouter.route('/')
        .get(function (req, res) {
            jobsCtrl.getAllJobs()
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
            if (role > 1) {
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
            } else {
                res.status(403);
                res.json({
                    success: false,
                    data: "Forbidden"
                });
            }
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

        .put(function (req, res) {
            let job = req.body;
            if (role > 1) {
                jobsCtrl.updateJob(req.params.id, job)
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
            } else {
                res.status(403);
                res.json({
                    success: false,
                    data: "Forbidden"
                });
            }
        })

        .delete(function (req, res) {
            let jobId = req.params.id;
            if (role > 1) {
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
            } else {
                res.status(403);
                res.json({
                    success: false,
                    data: "Forbidden"
                });
            }
        });

    return jobsRouter;
};

module.exports = router;