const User = require('../model/userModel');
const UserRoles = require('../../usersRoles/model/userRolesModel');

function getAllUser() {
    return User.findAll({
        include: {
            model: UserRoles
        }
    });
}

function changePassword(userId, oldPassword, password) {
    return new Promise((resolve, reject) => {
        User.findOne({
                where: {
                    id: userId,
                    password: oldPassword
                }
            }
        ).then((data) => {
            if (null !== data) {
                User.update({"password": password}, {
                    where: {
                        id: userId
                    }
                }).then((data) => resolve(data))
                    .catch((err) => reject(err));
            } else reject(new Error("wrong password"));
        })
            .catch((err) => reject(err));
    });
}

module.exports.getallUser = getAllUser;
module.exports.changePassword = changePassword;