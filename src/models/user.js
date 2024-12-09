const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Not a valid email id');
            }
        }
    },
    password: {
        type: String,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error('Not a strong password');
            }
        }
    },
    age: {
        type: Number,
        min: [15],
        max: 40
    },
    gender: {
        type: String,
        validate(value) {
            if (!['male', 'female'].includes(value)) {
                throw new Error('Please provide the appropriate values')
                }
        }
    },
    skills: [String],
    photoUrl: {
        type: String,
        default: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error('Not a valid URL');
            }
        }
    }
}, { timestamps: true});

module.exports = mongoose.model('User', userSchema);