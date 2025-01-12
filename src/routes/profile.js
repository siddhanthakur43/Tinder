const express = require('express');
const { userAuth } = require('../middlewares/userAuth');
const User = require('../models/user');
const { validateEditAllowed } = require('../utils/validation')

const profileRouter = express.Router();

profileRouter.get('/profile/view', userAuth, async (req, res) => {
    try {
        const user = req.user;
        res.send(user);
    } catch (err) {
        res.status(400).send('Something went wrong'+ err);    }
});

// api to update the user using id
// profileRouter.patch('/profile/edit/:userId', async (req, res) => {
//     const userId = req.params.userId;
//     const data = req.body;
//     try {
//         const ALLOWED_UPDATES = ['firstName', 'lastName', 'age', 'skills', 'photoUrl'];
//         const isAllowedUpdates = Object.keys(data).every((k) =>
//             ALLOWED_UPDATES.includes(k));
//         if (!isAllowedUpdates) {
//             throw new Error('Updates not allowed')
//         }
//         if (data.skills.length > 10) {
//             throw new Error('Skills can not be more than 10');
//         }
//         const updatedData = await User.findByIdAndUpdate(userId, data, {
//             runValidators: true,
//         });
//         res.send('User data updated successfully')
//     } catch (error) {
//         res.status(400).send('Something went wrong'+ error);
//     }
// })

profileRouter.patch('/profile/edit', userAuth, async (req, res) => {
    try {
        if (!validateEditAllowed(req)) {
            throw new Error("Edit is not allowed");
        };
        const loggedInUser = req.user;
        Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
        console.log(loggedInUser);
        await loggedInUser.save();
        res.json({
            message: `${loggedInUser.firstName}, your profile is updated successfully`,
            data: loggedInUser
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = profileRouter;