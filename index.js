const express = require('express');
const app = express();
require('./models/dbConfig');
const usersRoutes = require('./controllers/usersController');

app.use('/', usersRoutes);

app.listen(5500, () => console.log('Server port : 5500'));