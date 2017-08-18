var express = require('express');
var bodyParser =  require('body-parser');

var config = require('../config/enviroments/develop')
var jobsRouter = require('./jobs/routes/jobsRoutes');
var userRouter =require('./users/routes/usersRoutes');

var app = express();
var mysqlConnection = require('../config/mysql');
var connection = mysqlConnection.connection();

app.get('/',function (req,res) {
    connection.query('SELECT * FROM user_roles', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });
   res.send();
});

app.post('/',function (req,res) {
    connection.query('INSERT INTO user_roles (code,description) VALUES(\'user2\',\'user2\');', function (error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
    res.redirect('/');
});


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/api/jobs', jobsRouter(connection));
app.use('/api/users', userRouter());


app.listen(config.PORT, function (error) {
    console.log('Server running on  http://localhost:'+config.PORT);
});