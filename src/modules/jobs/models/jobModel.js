const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();
const Skills = require('../../skils/model/skills');

const Jobs = sequelize.define("jobs", {
    name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    description: {
        type: Sequelize.TEXT,
    },
    benefits: {
        type: Sequelize.TEXT,

    },
    code: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    }
});

Jobs.belongsToMany(Skills, {
    through: 'job_requirments',
    foreignKey: {
        name: 'jobId',
        field: 'job_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'

});

Skills.belongsToMany(Jobs, {
    through: 'job_requirments',
    foreignKey: {
        name: 'skillsId',
        field: 'skills_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

module.exports = Jobs;