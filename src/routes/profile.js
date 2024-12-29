const express = require('express');
const { userAuth } = require('../middlewares/userAuth');
const User = require('../models/user');

const profileRouter = express.Router();

profileRouter.get('/profile', userAuth, async (req, res) => {
    const user = req.user;
    res.send(user);
});

// api to update the user using id
profileRouter.patch('/profile/edit/:userId', async (req, res) => {
    const userId = req.params.userId;
    const data = req.body;
    try {
        const ALLOWED_UPDATES = ['firstName', 'lastName', 'age', 'skills', 'photoUrl'];
        const isAllowedUpdates = Object.keys(data).every((k) =>
            ALLOWED_UPDATES.includes(k));
        if (!isAllowedUpdates) {
            throw new Error('Updates not allowed')
        }
        if (data.skills.length > 10) {
            throw new Error('Skills can not be more than 10');
        }
        const updatedData = await User.findByIdAndUpdate(userId, data, {
            runValidators: true,
        });
        res.send('User data updated successfully')
    } catch (error) {
        res.status(400).send('Something went wrong'+ error);
    }
})

module.exports = profileRouter;