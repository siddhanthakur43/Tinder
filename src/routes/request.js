const express = require('express');
const User = require('../models/user');
const { userAuth } = require('../middlewares/userAuth');

const requestRouter = express.Router();

requestRouter.post('/send', userAuth, (req, res) => {
    res.send('User request send by' + req.user.firstName);
})

module.exports = requestRouter;
