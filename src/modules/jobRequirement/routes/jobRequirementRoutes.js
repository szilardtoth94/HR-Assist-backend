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
        });

    return jobRequirementRouter;
};

module.exports = router;