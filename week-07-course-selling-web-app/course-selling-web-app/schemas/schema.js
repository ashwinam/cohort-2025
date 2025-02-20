const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let objectId = Schema.ObjectId;

let User = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
});


let Creator = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

let Course = new Schema({
    courseName: String,
    courseDescription: String,
    creatorId: objectId
})

let Purchase = new Schema({
    courseId: objectId,
    userId: objectId
})


let UserModel = mongoose.model('users', User);
let CreatorModel = mongoose.model('creators', Creator);
let CourseModel = mongoose.model('course', Course);
let PurchaseModel = mongoose.model('purchase', Purchase);

module.exports = {
    UserModel,
    CreatorModel,
    CourseModel,
    PurchaseModel
}