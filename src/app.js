const express = require('express');
const config = require('../config/enviroments/config')
const app = express();

require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/sequelize').init(app);

app.get('/',function (req,res) {
   res.send("Welcome");
});

app.listen(config.PORT, function (error) {
    console.log('Server running on  http://localhost:'+config.PORT);
});