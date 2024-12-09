const mongoose = require('mongoose');

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
    },
    password: {
        type: String,
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
        default: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg"
    }
}, { timestamps: true});

module.exports = mongoose.model('User', userSchema);