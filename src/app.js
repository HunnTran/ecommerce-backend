const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

module.exports = app;