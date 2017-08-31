const express = require('express');
const jobRequirementRouter = express.Router();
const jobRequirementCtrl = require('../controller/jobRequirementController');

let router = function (role) {
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
            if (role > 1) {
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
            } else {
                res.status(403);
                res.json({
                    success: false,
                    data: "Forbidden"
                });
            }
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
            if (role > 1) {
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
            } else {
                res.status(403);
                res.json({
                    success: false,
                    data: "Forbidden"
                });
            }
        });

    return jobRequirementRouter;
};

module.exports = router;