require('dotenv').config();
const express = require('express');
const routes = require('./routes/route');
const { sequelize } = require('./models');
const app = express();

app.use(express.json());
app.use('/', routes);

sequelize.authenticate()
    .then(() => {
        console.log('Connection to database.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
