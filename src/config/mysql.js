var mysql      = require('mysql');
var config = require('../config/enviroments/develop')
var Singleton = (function () {
    var instance;

    function createInstance() {
        connection = mysql.createConnection(config.mysql);

        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log("Connected  to database");
        });
        return  connection;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports.connection = Singleton.getInstance;