const express = require('express');
const app = express();
require('./models/dbConfig');
const usersRoutes = require('./controllers/usersController');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRoutes);

app.listen(5500, () => console.log('Server port : 5500'));