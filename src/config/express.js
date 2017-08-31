let bodyParser = require('body-parser');

function initExpress(app) {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8089");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
}

module.exports.init = initExpress;