const JobsRouter = require('../modules/jobs/routes/jobsRoutes');
const UserRouter = require('../modules/users/routes/usersRoutes');
const JobRequirementRouter = require('../modules/jobRequirement/routes/jobRequirementRoutes')
const SkillsRoutes = require('../modules/skils/routes/skillsRoutes');
const UserRolesRouter = require('../modules/usersRoles/routes/usersRolesRoutes');
const PersonalInfoRoutes = require('../modules/personalInfo/routes/personalInfoRoutes');
const UserEducationRoutes = require('../modules/usersEducation/routes/usersEducationRoutes');
const UserWorkExperienceRouter = require('../modules/userWorkExperience/routes/userWorkExperienceRoutes');
const UserSkillsRouter = require('../modules/userSkils/routes/user.skills.routes');
const JobApplyRouter = require('../modules/jobApply/routes/jobApplyRoutes');
const LoginRouter = require('../modules/login/routes/loginRoutes');
const loginController = require("../modules/login/controller/login");
const atob = require('atob');

function initRoutes(app) {
    let auth;
    let role = 3;

    app.use('/login', LoginRouter());

    app.use(function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        } else {
            if (req.headers && req.headers.authorization) {
                auth = (atob(req.headers.authorization));
                console.log(auth);
                loginController.logIn(auth.split(':')[0], auth.split(':')[1])
                    .then((result) => {
                            if (result) {
                                console.log("success");
                                role = result.dataValues.userRoleId;
                                next();
                            }
                            else {
                                console.log(result);
                                res.status(403);
                                console.log("unsuccess1");
                                res.send("forbidden")
                            }
                        }
                    )
                    .catch(function (error) {
                        res.status(400);
                        console.log("unsucces");
                        res.send("error")
                    });

            }
            else {
                res.status(403);
                res.send('Forbidden');
            }
        }
    });

    app.use('/api/jobs', JobsRouter(role));
    app.use('/api/users', UserRouter(role));
    app.use('/api/userroles', UserRolesRouter(role));
    app.use('/api/requirements', JobRequirementRouter(role));
    app.use('/api/skills', SkillsRoutes(role));
    app.use('/api/persinfo', PersonalInfoRoutes(role));
    app.use('/api/education', UserEducationRoutes(role));
    app.use('/api/work', UserWorkExperienceRouter(role));
    app.use('/api/userskills', UserSkillsRouter(role));
    app.use('/api/apply', JobApplyRouter(role));
}

module.exports.init = initRoutes;