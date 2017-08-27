const express = require('express');
const jobRequirementRouter = express.Router();
const jobRequirementCtrl = require('../controller/jobRequirementController');

let router = function (connection) {
    jobRequirementRouter.route('/')
        .get(function (req, res) {
            jobRequirementCtrl.getAllJobRequirment()
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
            jobRequirementCtrl.createJobSkills(req.body)
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
        });

    jobRequirementRouter.route('/:id')
        .get(function (req, res) {
            jobRequirementCtrl.getJobSkillsByPersId(req.params.id)
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
        .delete(function (req, res) {
            jobRequirementCtrl.deleteJobSkill(req.params.id)
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
        });

    return jobRequirementRouter;
};

module.exports = router;