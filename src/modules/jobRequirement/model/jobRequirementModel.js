const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const JobRequirment = sequelize.define("job_requirments", {

    description: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    skills_id :{
        type:Sequelize.INTEGER
    }

}, {
    timestamp: false,
    associate: function (Job) {
        JobRequirment.belongsTo(Job, {
            foreignKey: 'id'
        })


    },

    associate2: function (Skills) {

        JobRequirment.belongsTo(Skills, {
           foreignKey: 'id',
        })
    }

});


module.exports = JobRequirment;