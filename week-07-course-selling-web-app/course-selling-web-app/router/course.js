const express = require('express');
const { CourseModel, PurchaseModel } = require('../schemas/schema');
const { userMiddleware } = require('../middlewares/user');
const router = express.Router()

router.get('/preview', async (req, res) => {
    const courses = await CourseModel.find();

    res.status(200).json({
        courses
    })
});

router.post('/purchase', userMiddleware, async (req, res) => {
    const courseId = req.body.courseId;
    const userId = req.userId;

    PurchaseModel.create({
        courseId,
        userId
    });

    res.status(201).json({
        message: "Course purchase successfully."
    })


})

module.exports = router;
