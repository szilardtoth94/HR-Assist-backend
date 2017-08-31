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
        });

    userRouter.route('/:id')
        .put(function (req, res) {
            userCtrl.changePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
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

    return userRouter;
};

module.exports = router;