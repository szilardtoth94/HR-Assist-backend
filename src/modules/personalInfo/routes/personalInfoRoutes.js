const express = require('express');
const persInfoRouter = express.Router();

const persInfoCtrl = require('../controllers/personalInfoController');

let router = function (connection) {

    persInfoRouter.route('/')
        .get(function (req, res) {
            persInfoCtrl.getAllPersonalInfo()
                .then((result) => {
                    res.header("Access-Control-Allow-Origin", "*");
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
        });
    //     .post(function (req, res) {
    //         let job = req.body;
    //         console.log(req.body);
    //         userCtrl.createJob(job)
    //             .then((result) => {
    //                 res.json({
    //                     success: true,
    //                     data: result
    //                 })
    //             })
    //             .catch(function (error) {
    //                 res.status(400);
    //                 res.json({
    //                     success: false,
    //                     data: error
    //                 })
    //
    //             })
    //     })
    //
    //     .put(function (req, res) {
    //         let job =req.body;
    //         jobsCtrl.updateJob(job)
    //             .then(result => {
    //                 res.json({
    //                     success: true,
    //                     data: result
    //                 })
    //             })
    //             .catch(function (error) {
    //                 res.status(400);
    //                 res.json({
    //                     success: false,
    //                     data: error
    //                 })
    //
    //             })
    //
    //     });
    //
    //
    persInfoRouter.route('/:id')
        .get(function (req, res) {
            let persInfId = req.params.id;
            persInfoCtrl.getPersonalInfoById(persInfId)
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
                    })
                })
        });
    //     .delete(function (req, res) {
    //         let jobId = req.params.id;
    //         jobsCtrl.deleteJob(jobId)
    //             .then(result => {
    //                 res.json({
    //                     success: true,
    //                     data: result
    //                 })
    //             })
    //             .catch(function (error) {
    //                 res.status(400);
    //                 res.json({
    //                     success: false,
    //                     data: error
    //                 })
    //
    //             })
    //
    //     });


    persInfoRouter.route('/all/:id')
        .get(function (req, res) {
            let persInfId = req.params.id;
            persInfoCtrl.getAllPersonalInfoById(persInfId)
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
                    })
                })
        });
    return persInfoRouter;

};

module.exports = router;