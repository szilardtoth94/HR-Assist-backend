const jobsRouter = require('../modules/jobs/routes/jobsRoutes');
const userRouter = require('../modules/users/routes/usersRoutes');
const jobRequirementRouter = require('../modules/jobRequirement/routes/jobRequirementRoutes')
const skillsRoutes = require('../modules/skils/routes/skillsRoutes');
const userRolesRouter = require('../modules/usersRoles/routes/usersRolesRoutes');
const personalInfoRoutes = require('../modules/personalInfo/routes/personalInfoRoutes');
const userEducationRoutes =require('../modules/usersEducation/routes/usersEducationRoutes');
const userWorkExperienceRouter = require('../modules/userWorkExperience/routes/userWorkExperienceRoutes');
const userSkillsRouter=require('../modules/userSkils/routes/usee.skills.routes');

function initRoutes(app) {
    // app.use(function (req, res, next) {
    //     console.log(req.headers);
    //     if (req.headers && req.headers.authorizationxyz) {
    //         next()
    //     }
    //     else {
    //         res.status(400);
    //         res.send('None shall pass');
    //     }
    // });


    app.use('/api/jobs', jobsRouter());
    app.use('/api/users', userRouter());
    app.use('/api/userroles', userRolesRouter());
    app.use('/api/requirements', jobRequirementRouter());
    app.use('/api/skills', skillsRoutes());
    app.use('/api/persinfo', personalInfoRoutes());
    app.use('/api/education',userEducationRoutes());
    app.use('/api/work',userWorkExperienceRouter());
    app.use('/api/userskills',userSkillsRouter());
}

module.exports.init = initRoutes;