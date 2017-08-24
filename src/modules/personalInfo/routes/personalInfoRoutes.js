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