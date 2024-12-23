const jwt = require('jsonwebtoken');
const User = require('../models/user');

const userAuth = async (req, res, next) => {
    try {
    const { cookies } = req;
    const { token } = cookies;
    if (!token) {
        throw new Error('Please login again');
    }
    const isValidToken = await jwt.verify(token, 'Sid@12345');
    const { _id } = isValidToken;
    const user = await User.findById(_id);
    if (!user) {
        throw new Error('User Not found')
    }
    req.user = user;
    next();
    } catch (e) {
        res.status(400).send('Error:', e.message);
    }
}

module.exports = { userAuth };