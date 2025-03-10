const { Router } = require('express');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const { CreatorModel } = require('../schemas/schema');
const dotenv = require('dotenv').config();
const { adminMiddleware } = require('../middlewares/admin');
const { CourseModel } = require('../schemas/schema');
const jwt = require('jsonwebtoken');

const admin_jwt_secret = process.env.ADMIN_JWT_SECRET

const creatorRouter = Router();

creatorRouter.post('/signup', async (req, res) => {
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
    
        await CreatorModel.create({email, password: hashedPassword, firstName, lastName});
    
        res.status(200).json({message: 'User signed up successfully.'})
    }catch(e) {
        res.status(401).json({
            message: 'email is already exists.'
        })
    }
});

creatorRouter.post('/signin', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let foundUser = await CreatorModel.findOne({email: email});

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
    }, admin_jwt_secret);

    res.status(200).json({
        token 
    })
});
creatorRouter.post('/course', adminMiddleware, async (req, res) => {
    const requiredData = z.object({
        courseName: z.string().min(5).max(100),
        courseDescription: z.string().min(5).max(500),
        coursePrice: z.number().min(1)
    });

    let userPassedData = requiredData.safeParse(req.body);

    if(!userPassedData.success){
        res.json({
            error: userPassedData.error
        })
        return
    }

    let creatorId = req.creatorId;

    let { courseName, courseDescription, coursePrice } = req.body;

    let courseId = await CourseModel.create({
        courseName, courseDescription, coursePrice, creatorId
    });

    res.json({
        message: 'Course Created Successfully.',
        courseId
    })
    
});
creatorRouter.put('/course', adminMiddleware, async (req, res) => {
    const { courseId, courseName, courseDescription, coursePrice } = req.body;

    // Find the course
    const course = await CourseModel.updateOne({_id: courseId, creatorId: req.creatorId}, {'$set': {courseName, courseDescription, coursePrice}});

    if(course){
        res.status(200).json({
            message: 'course updated successfully.'
        })
    } else {
        res.status(403).json({
            message: "Course did not found"
        })
    }


});

creatorRouter.get('/course/bulk', adminMiddleware, async (req, res) => {
    const creatorId = req.creatorId;

    const courses = await CourseModel.find({creatorId: creatorId})

    if (courses.length > 0){
        res.status(200).json({
            data: courses
        })
    } else {
        res.status(404).json({
            message: "No courses available"
        })
    }
});

module.exports = creatorRouter;