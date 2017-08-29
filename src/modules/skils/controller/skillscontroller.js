const Skills = require('../model/skills');

function createSkill(skill){
    return Skills.create(skill);
}
function getAllSkills() {
    return Skills.findAll();
}

function deleteSkill(id){
    return Skills.destroy({
        where:{
            id:id
        }
    })
}

module.exports.createSkill =createSkill;
module.exports.getAllSkills = getAllSkills;
module.exports.deleteSkill=deleteSkill;