const express = require('express');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');
const creatorRouter = require('./router/creator');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const app = express();


app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/creator', creatorRouter)

let  main = async ()=>{
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    app.listen(3000);
    console.log('Listening to 3000.');
}

main();