const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createRouter = require('./helpers/create_router.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
