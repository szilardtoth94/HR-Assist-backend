const express = require('express');
const userRouter = express.Router();
const userCtrl = require('../controllers/usersController');

const router = function (connection) {
    userRouter.route('/')
        .get(function (req, res) {
            userCtrl.getallUser()
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
            userCtrl.logIn(req.body.userName,req.body.password)
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

    return userRouter;
};

module.exports = router;