const express = require('express');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');

const app = express();

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)

app.listen(3000);