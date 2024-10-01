const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const homePage = require('./routes/homePage');
const connectDB = require('./config/db');

require('dotenv').config();


const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.set('view engine', 'ejs');

app.get('/', homePage);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Chạy thành công http://localhost:${PORT}`));