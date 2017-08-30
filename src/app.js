const express = require('express');
const config = require('../config/enviroments/config')
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const routes= require('./config/routes');
require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/sequelize').init(app);

app.get('/', function (req, res) {
    res.send("Welcome");
});

app.listen(config.PORT, function (error) {
    console.log('Server running on  http://localhost:' + config.PORT);
});

// var swaggerDefinition = {
//     info: {
//         title: 'Community DJ API',
//         version: '1.0.0',
//         description: '',
//     },
//     host: ("http://localhost:5000"),
//     basePath: '/',
// };
//
// // options for the swagger docs
// var options = {
//     // import swaggerDefinitions
//     swaggerDefinition: swaggerDefinition,
//     // path to the API docs
//     apis: routes.initPath(app)
// };
// //
// // // initialize swagger-jsdoc
// var swaggerSpec = swaggerJSDoc(options);
//
// // serve swagger
// app.get('/swagger.json', function (req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
// });
