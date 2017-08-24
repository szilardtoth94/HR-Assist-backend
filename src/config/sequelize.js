'use strict';
const Sequelize = require('sequelize');
const config = require('../../config/enviroments/config').sequelize;
let sequalize = null;

function initSequelize() {
    if (null === sequalize) {
        sequalize = new Sequelize(config.database, config.user, config.password, {
            host: config.host,
            dialect: config.dialect,
            port: config.port,

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                timestamps: false,
                freezeTableName: true,
                underscored:true,
            }
        });

        sequalize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
    return sequalize;
}

module.exports.init = initSequelize;