var express = require('express');
var bodyParser =  require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const PORT = 5000;

var jobsRouter = require('./src/jobs/routes/jobsRoutes');
var userRouter =require('./src/users/routes/usersRoutes');

app.get('/',function (req,res) {
   res.send('Root page');
});

app.use('/api/jobs', jobsRouter());
app.use('/api/users', userRouter());


app.listen(PORT, function (error) {
    console.log('Server running on  http://localhost:'+PORT);
});