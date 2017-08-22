const express = require('express');
const skillsRouter = express.Router();

const skillsCtrl = require('../controller/skillscontroller');

let router = function (connection) {

    skillsRouter.route('/')
        .get(function (req, res) {
            skillsCtrl.getAllSkills()
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

    return skillsRouter;
};

module.exports = router;