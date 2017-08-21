const sequelize = require('../../../config/sequelize').init();
const Sequelize = require('sequelize');

const Jobs = sequelize.define("jobs", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    description: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    benefits: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 44]
        }
    },
    code: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 44]
        }
    }
}, {
    timestamp: false
});

module.exports = Jobs;