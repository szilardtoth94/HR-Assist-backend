const User = require('../../users/model/userModel');
const PersInf =require('../../personalInfo/model/personalInfoModel')
function logIn(username, password) {
    return User.findOne({
        where: {
            userName: username,
            password: password
        },
        include :PersInf
    })
}

module.exports.logIn=logIn;