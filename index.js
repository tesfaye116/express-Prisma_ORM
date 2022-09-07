import express from 'express';
import bodyParser from 'body-parser'
import colors from 'colors';
import router from './router/router.js'

var app = express();
var port = process.env.PORT || 5000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)


app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`.yellow.bold))

