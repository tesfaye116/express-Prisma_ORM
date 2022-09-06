var express = require('express');
var bodyParser = require('body-parser');
var colors = require('colors');

var app = express();
var port = process.env.PORT || 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server listening on port http://localhost/${port}`.yellow.bold))

