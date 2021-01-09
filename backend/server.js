// from FCC MERN Tutorial
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const login = require('./routes/login');

require('dotenv').config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware
app.use(cors());
app.use(express.json()); // parse json
app.use('/login', login);

const uri = process.env.MONGODB_KEY;
// need these flags to deal with things that mongoDB has deprecated
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully!");
});

const taskRouter = require('./routes/tasks');
app.use('/tasks', taskRouter);

// starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});