const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const admin_jwt_secret = process.env.ADMIN_JWT_SECRET

function adminMiddleware(req, res, next){
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, admin_jwt_secret);

    if (decoded){
        req.creatorId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: 'Unauthorized.'
        })
    }
}

module.exports = {
    adminMiddleware
}