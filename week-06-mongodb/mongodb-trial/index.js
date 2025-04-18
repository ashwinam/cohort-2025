const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {UserModel, TodoModel} = require('./db/schemas')
const auth = require('./middlewares/auth')
const bcrypt = require('bcrypt');
const { z } = require('zod');

mongoose.connect("mongodb+srv://tryashwinm:sUNSOXRD7alPMVWz@cluster0.0uhqa.mongodb.net/todos-db")

const app = express();

app.use(express.json())

const JWT_SECRET = "s3cret";

app.post('/signup', async (req, res)=>{

    let requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(50)
    })

    let userPassedData = requiredBody.safeParse(req.body);

    if(!userPassedData.success){
        res.json({
            error: userPassedData.error
        })
    }

    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;

    let hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    })

    res.json({
        message: "User Sign up successfully."
    })
})

app.post('/signin', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    try {
        let user = await UserModel.findOne({
            email: email
        })

        let correctedPassword = await bcrypt.compare(password, user.password);
        

        if(user && correctedPassword){
            let token = jwt.sign({
                id: user._id.toString()
            }, JWT_SECRET)

            res.json({
                token
            })
        
        } else {
            res.status(401).json({
                message: "Incorrect Credentials."
            })
        
    }} catch (error) {
        
    }
})

//authenticated
app.post('/todos', auth, async (req, res)=>{
    const userId = req.userId;
    const title = req.body.title;
    const isDone = req.body.isDone;

    await TodoModel.create({
        userId,
        title,
        isDone
    })

    res.json({
        message: "todo added successfully."
    })
}) 

//authenticated
app.get('/todos', auth, async (req, res)=>{
    let todos = await TodoModel.find({userId: req.userId})

    res.json({
        todos
    })
})


app.listen(3000);