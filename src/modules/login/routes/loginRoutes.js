const express = require('express');
const loginRouter = express.Router();
const loginCtrl = require('../controller/login');

const router = function () {
    loginRouter.route('/')
        .post(function (req, res) {
            loginCtrl.logIn(req.body.userName,req.body.password)
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


    return loginRouter;
};

module.exports = router;