const Skills = require('../model/skills');

function getAllSkills() {
    return Skills.findAll();
}

module.exports.getAllSkills = getAllSkills;