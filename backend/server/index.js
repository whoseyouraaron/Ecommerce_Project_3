const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors')

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;


app.use(cors());

const ItemsRoute = require('./routes/Items');

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', ItemsRoute);


app.listen(PORT, ()=> console.log("Listen on port"))