const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const user_jwt_secret = process.env.USER_JWT_SECRET

function userMiddleware(req, res, next){
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, user_jwt_secret);

    if (decoded){
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: 'Unauthorized.'
        })
    }
}

module.exports = {
    userMiddleware
}