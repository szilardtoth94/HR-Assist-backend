const express = require('express');
const userEducationRouter = express.Router();
const userEducationCtrl = require('../controllers/usersEducationController');

const router = function (connection) {
    userEducationRouter.route('/')
        .get(function (req, res) {
            userEducationCtrl.getAllUserEducation()
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
            let userEducation = req.body;
            userEducationCtrl.createUserEcucation(userEducation)
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
        });

    userEducationRouter.route('/:id')
        .put(function (req, res) {
            let education = req.body;
            userEducationCtrl.updateEducation(education, req.params.id)
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
        })
        .get(function (req, res) {
            let educationId = req.params.id;
            userEducationCtrl.getEducationById(educationId)
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
            let educationId = req.params.id;
            userEducationCtrl.deleteEducation(educationId)
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

    return userEducationRouter;
};

module.exports = router;