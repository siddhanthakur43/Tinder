const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://siddhantthakur043:Sid1234567@nodejs.ah2bt.mongodb.net/tinder'
    );
};

module.exports = { connectDB }
