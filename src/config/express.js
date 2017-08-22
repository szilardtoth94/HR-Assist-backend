var bodyParser = require('body-parser');

function initExpress(app) {

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());
}

module.exports.init = initExpress;