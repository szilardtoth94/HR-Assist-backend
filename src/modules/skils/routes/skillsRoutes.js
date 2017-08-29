const express = require('express');
const skillsRouter = express.Router();
const skillsCtrl = require('../controller/skillscontroller');

const router = function (connection) {
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
        })
        .post(function (req, res) {
            skillsCtrl.createSkill(req.body)
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

    skillsRouter.route('/:id')
        .delete(function (req, res) {
            skillsCtrl.deleteSkill(req.params.id)
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