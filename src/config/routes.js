const jobsRouter = require('../modules/jobs/routes/jobsRoutes');
const userRouter = require('../modules/users/routes/usersRoutes');
const jobRequirementRouter = require('../modules/jobRequirement/routes/jobRequirementRoutes')
const skillsRoutes = require('../modules/skils/routes/skillsRoutes');
const userRolesRouter = require('../modules/usersRoles/routes/usersRolesRoutes');
const personalInfoRoutes = require('../modules/personalInfo/routes/personalInfoRoutes');
const userEducationRoutes = require('../modules/usersEducation/routes/usersEducationRoutes');
const userWorkExperienceRouter = require('../modules/userWorkExperience/routes/userWorkExperienceRoutes');
const userSkillsRouter = require('../modules/userSkils/routes/user.skills.routes');
const jobApplyRouter = require('../modules/jobApply/routes/jobApplyRoutes');
const loginRouter = require('../modules/login/routes/loginRoutes');
const atob = require('atob');
const login = require("../modules/login/controller/login");

function initRoutes(app) {
    app.use('/login',loginRouter());
    var auth;
    app.use(function (req, res, next) {
        console.log(req.headers);
        if (req.headers && req.headers.authorization) {
            auth = (atob(req.headers.authorization));
            next()
        }
        else {
            res.status(403);
            res.send('Forbidden');
        }
    });

    function isAuthenticated(req, res, next) {
        console.log(auth);
        login.logIn(auth.split(':')[0], auth.split(':')[1])
            .then((result) => {
                    if (result) {
                        console.log("succes");
                        next();
                    }
                    else {
                        res.status(403);
                        console.log("unsucces1");
                        res.send("forbidden")
                    }
                }
            )
            .catch(function (error) {
                res.status(400);
                console.log("unsucces");
                res.send("error")
            });

// IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE

    };
    app.use('/api/jobs', isAuthenticated,jobsRouter());
    app.use('/api/users', isAuthenticated, userRouter());
    app.use('/api/userroles',isAuthenticated, userRolesRouter());
    app.use('/api/requirements', isAuthenticated,jobRequirementRouter());
    app.use('/api/skills',isAuthenticated, skillsRoutes());
    app.use('/api/persinfo',isAuthenticated, personalInfoRoutes());
    app.use('/api/education',isAuthenticated, userEducationRoutes());
    app.use('/api/work',isAuthenticated, userWorkExperienceRouter());
    app.use('/api/userskills',isAuthenticated, userSkillsRouter());
    app.use('/api/apply', isAuthenticated,jobApplyRouter());
}

module.exports.init = initRoutes;