const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors')

const app = express();
//use express.json() port would not work because in link i still had <>in my password so annoying
app.use(express.json());
//Port was annoying fot the smallest thing
const PORT = process.env.PORT || 5500;


app.use(cors());