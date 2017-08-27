const express = require('express');
const userRolesRouter = express.Router();
const userRolesCtrl = require('../controllers/usersRolesController');

const router = function (connection) {
    userRolesRouter.route('/')
        .get(function (req, res) {
            userRolesCtrl.getallUserRoles()
                .then((result) => {
                    res.json({
                        succes: true,
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

    return userRolesRouter;
};

module.exports = router;