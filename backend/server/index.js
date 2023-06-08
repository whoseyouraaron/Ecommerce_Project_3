const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors')

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;





app.listen(PORT, ()=> console.log("server connected"))