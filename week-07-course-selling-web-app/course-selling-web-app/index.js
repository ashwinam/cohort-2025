const express = require('express');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');
const creatorRouter = require('./router/creator');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);


app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/creator', courseRouter)



app.listen(3000);