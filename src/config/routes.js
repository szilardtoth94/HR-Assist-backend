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

let atob = require('atob');

function initRoutes(app) {
    let auth;
    let role = 1;

    app.use('/login', LoginRouter());

    app.use(function (req, res, next) {
         next();
        // if (req.headers && req.headers.authorization) {
        //     auth = (atob(req.headers.authorization));
        //     next()
        // }
        // else {
        //     res.status(403);
        //     res.send('Forbidden');
        // }
    });

    function checkUser(req, res, next) {
         next();
        // loginController.logIn(auth.split(':')[0], auth.split(':')[1])
        //     .then((result) => {
        //             if (result) {
        //                 //console.log(result);
        //                 console.log("success");
        //                 next();
        //             }
        //             else {
        //                 res.status(403);
        //                 console.log("unsuccess1");
        //                 res.send("forbidden")
        //             }
        //         }
        //     )
        //     .catch(function (error) {
        //         res.status(400);
        //         console.log("unsucces");
        //         res.send("error")
        //     });
    }

    app.use('/api/jobs', checkUser, JobsRouter(role));
    app.use('/api/users', checkUser, UserRouter(role));
    app.use('/api/userroles', checkUser, UserRolesRouter(role));
    app.use('/api/requirements', checkUser, JobRequirementRouter(role));
    app.use('/api/skills', checkUser, SkillsRoutes(role));
    app.use('/api/persinfo', checkUser, PersonalInfoRoutes(role));
    app.use('/api/education', checkUser, UserEducationRoutes(role));
    app.use('/api/work', checkUser, UserWorkExperienceRouter(role));
    app.use('/api/userskills', checkUser, UserSkillsRouter(role));
    app.use('/api/apply', checkUser, JobApplyRouter(role));
}

module.exports.init = initRoutes;