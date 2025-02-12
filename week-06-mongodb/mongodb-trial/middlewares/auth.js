const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";

function auth(req, res, next){
    const token = req.headers.token;

    let userId = jwt.verify(token, JWT_SECRET);

    if (userId){
        req.userId = userId.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = auth