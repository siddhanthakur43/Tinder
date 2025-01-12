const express = require("express");
const { validateSignUpData } = require("../utils/validation");
const bcrypt = require('bcrypt');
const User = require('../models/user');
const authRouter = express.Router();

//SignUp Api to add user to DB
authRouter.post('/signup', async (req, res) => {
    try {
        //validating a signup data
        validateSignUpData(req)
        const { firstName, lastName, emailId, password } = req.body;
        // encrypting the password
        const hashPassword = await bcrypt.hash(password, 10);
        //creating a instance of the user model
        const user = new User({ firstName, lastName, emailId, password: hashPassword});
        await user.save();
    res.send('User Added Successfully');
    } catch (e) {
        res.status(400).send('ERROR :' + e.message);
    }
});

authRouter.post('/login', async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const user = await User.findOne({ emailId: emailId });
        if (!user) {
            throw new Error('Invalid Credentials');
        }
        const isPasswordValid = await user.verifyPassword(password);

        if (isPasswordValid) {
            //create jwt
            //you can expire jwt
            // const token = await jwt.sign({ _id: user._id }, 'Sid@12345', { expiresIn: '1d'});
            const token = await user.getJWT();
            //add token to cookie and send the response back to user
            //you can expire cookie as well
            res.cookie('token', token);
            res.send('User Logged in successfully');
        } else {
            throw new Error('Invalid Credentials');
        }

    } catch (error) {
        res.status(400).send('ERROR :' + error.message);
    }
});

authRouter.post('/logout', async (req, res) => {
    //you can add some more cleanup as well
    res.cookie('token', null, {
        expires: new Date(Date.now()),
    });
    res.send('User Loggedout succcessfully');
});

module.exports = authRouter;