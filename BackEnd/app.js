const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const dataRoute = require('./routes/dataRoute');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);
app.use('/data', dataRoute);



module.exports = app;