const express = require('express');
const jobsRouter = express.Router();

const userCtrl = require('../controllers/jobsController')

var router = function (routerOption) {

    jobsRouter.route('/').get(userCtrl.allJobs);

    jobsRouter.route('/:id').get(userCtrl.jobById);

    return jobsRouter;
}

module.exports = router;