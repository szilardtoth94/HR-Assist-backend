const config = require('../../config/enviroments/config').sequelize;
const Sequelize = require('sequelize');
function initSequelize() {

    let sequelize = new Sequelize(config.database, config.user, config.password, {
        host: config.host,
        dialect: config.dialect,
        port:config.port,

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        define: {
            timestamps: false
        }
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    return sequelize;
}

module.exports.init =initSequelize;