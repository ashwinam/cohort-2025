const express = require('express');
const { UserModel } = require('../schemas/schema')
const bcrypt = require('bcrypt');
const { z } = require('zod');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

const router = express.Router()
const user_jwt_secret = process.env.USER_JWT_SECRET

router.post('/signup', async (req, res) => {

    try{
        let requiredBody = z.object({
            email: z.string().min(5).max(100).email(),
            password : z.string().min(5).max(20),
            firstName : z.string().min(5).max(20),
            lastName : z.string().min(5).max(20),
        })
    
        let userPassedData = requiredBody.safeParse(req.body);
    
        if(!userPassedData.success){
            res.json({
                error: userPassedData.error
            })
            return
        }
    
        const email = req.body.email;
        const password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
    
        const hashedPassword = await bcrypt.hash(password, 5);
    
        await UserModel.create({email, password: hashedPassword, firstName, lastName});
    
        res.status(200).json({message: 'User signed up successfully.'})
    }catch(e) {
        res.status(401).json({
            message: 'email is already exists.'
        })
    }

    

})


router.post('/signin', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let foundUser = await UserModel.findOne({email: email});

    if (!foundUser){
        return res.status(404).json({
            message: 'Email and password didn"t match.'
        })
    }

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match){
        return res.status(404).json({
            message: 'Email and password didn"t match.'
        })
    }

    let token = jwt.sign({
        id: foundUser._id
    }, user_jwt_secret);

    res.status(200).json({
        token 
    })


})
router.get('/courses', (req, res) => {})


module.exports = router;

