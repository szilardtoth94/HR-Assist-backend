const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Skills =require('../../skils/model/skills');

const Jobs = sequelize.define("jobs", {

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
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    code: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    }
}, {
    timestamp: false,

});
Jobs.belongsToMany(Skills,{
    through:'job_requirments',
    foreignKey:'job_id'
});

Skills.belongsToMany(Jobs,{
    through:'job_requirments',
    foreignKey:'skills_id'
});


module.exports = Jobs;