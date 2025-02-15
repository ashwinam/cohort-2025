const express = require('express');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');
const creatorRouter = require('./router/creator');

const app = express();

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/creator', courseRouter)

app.listen(3000);