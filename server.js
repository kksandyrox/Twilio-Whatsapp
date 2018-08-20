var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./router');

var port = process.env.PORT || 4010


app.listen(port, function () {
	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
	app.use('/api', routes)
	console.log("Server Running Successfuly yes!");
	console.log("Port: ", port);
});


