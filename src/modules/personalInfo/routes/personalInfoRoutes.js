const express = require('express');
const persInfoRouter = express.Router();
const persInfoCtrl = require('../controllers/personalInfoController');

let router = function (role) {
    persInfoRouter.route('/')
        .post(function (req, res) {
            let job = req.body;
            console.log(job);
            if (role > 1) {
                persInfoCtrl.createPersonalInfo(job)
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
            }
            else {
                res.status(403);
                res.json({
                    success: false,
                    data: "Forbidden"
                });
            }
        });

    persInfoRouter.route('/')
        .get(function (req, res) {
            persInfoCtrl.getAllPersonalInfo()
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

    persInfoRouter.route('/all/:id')

        .get(function (req, res) {
            let persInfId = req.params.id;
            console.log((role));
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

    persInfoRouter.route('/:id')
        .delete(function (req, res) {
            let userId = req.params.id;
            if (role > 1) {
                persInfoCtrl.deletePersonalInfo(userId)
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

        .put(function (req, res) {
            let userId = req.params.id;
            let user = req.body;
            if (role > 1) {
                persInfoCtrl.editPersonalInfo(user, userId)
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

    return persInfoRouter;
};

module.exports = router;