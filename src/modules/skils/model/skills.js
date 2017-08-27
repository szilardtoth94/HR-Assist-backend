const Sequelize = require('sequelize');
const sequelize = require('../../../config/sequelize').init();

const Skills = sequelize.define("skills", {

    name: {
        type: Sequelize.STRING(45),
        validate: {
            len: [0, 44]
        }
    },
    description: {
        type: Sequelize.STRING(45),
    }
}, {
    timestamp: false,
    // associate2: function (jobRequirement) {
    //     console.log(Skills);
    //     Skills.hasMany(jobRequirement, {
    //         foreignKey: 'skills_id',
    //     })
    // }

});


module.exports = Skills;