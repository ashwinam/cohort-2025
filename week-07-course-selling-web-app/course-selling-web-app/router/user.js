const express = require('express');
const { UserModel } = require('../schemas/schema')
const bcrypt = require('bcrypt');

const router = express.Router()

router.post('/signup', async (req, res) => {
    /*
    take the email, password
    hash the password
    push it to the mongodb instance
    */

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({email, password: hashedPassword, firstName, lastName});

    res.status(200).json({message: 'User signed up successfully.'})

})
router.post('/signin', (req, res) => {})
router.get('/courses', (req, res) => {})


module.exports = router;

