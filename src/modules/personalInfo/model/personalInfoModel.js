const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const PersonalInfo = sequelize.define("personal_info", {

    first_name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    last_name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },

    description: {
        type: Sequelize.DATE
    }
}, {
    timestamp: false,


});

module.exports = PersonalInfo;