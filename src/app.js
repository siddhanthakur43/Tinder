const express = require('express');
const { connectDB } = require('./config/database')
const User = require('./models/user');

const app = express();

app.use(express.json());

//SignUp Api to add user to DB
app.post('/signup', async (req, res) => {
    //creating a instance of the user model
    const user = new User(req.body);
    try {
    await user.save();
    res.send('User Added Successfully');
    } catch (e) {
        res.status(400).send('Something went wrong' + e);
    }
    
});

//user api to get the data of user by email id
app.get('/user', async (req, res) => {
    const email = req.body.emailId;
    try {
        const userData = await User.find({ emailId: email });
        if (userData.length === 0) {
            res.status(404).send('No User found');
        } else {
            res.send(userData);
        }
    } catch (e) {
        res.status(400).send('Something went wrong'+ e);
    }
})

//user api to get the data when two users have same email id get one data using findOne method
app.get('/userOne', async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const userData = await User.findOne({ emailId: userEmail });
        if (userData.length === 0) {
            res.status(404).send('No user found with that email id')
        } else {
            res.send(userData);
        }
    } catch (e) {
        res.status(400).send('Something went wrong'+ e);
    }
})

//feed api to get the data of all the user
app.get('/feed', async (req, res) => {
    try {
        const usersData = await User.find({});
        res.send(usersData);
    } catch (e) {
        res.status(400).send('Something went wrong'+ e);
    }
})

//api to delete user
app.delete('/user', async (req, res) => {
    const userId = req.body.userId;
    try {
        const id = await User.findByIdAndDelete(userId);
        res.send('User Deleted Successfully');
    } catch (error) {
        res.status(400).send('Something went wrong'+ e);
    }
})

// api to update the user using id
app.patch('/user/:userId', async (req, res) => {
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
        console.log(updatedData)
        res.send('User data updated successfully')
    } catch (error) {
        res.status(400).send('Something went wrong'+ error);
    }
})

//api to update the user using email id
// app.patch('/user', async (req, res) => {
//     const emailId = req.body.emailId;
//     console.log(emailId);
//     const data = req.body;
//     console.log(data);
//     try {
//         const userData = await User.findOneAndUpdate({emailId: emailId}, data);
//         res.send('User updated successfully using emailId');
//     } catch (error) {
//         res.status(400).send('Something went wrong'+ e);
//     }
// })


connectDB()
    .then(() => {
        console.log('DataBase Connection Esatablished.....');
        app.listen(8080, () => {
            console.log('Server is running on port 8080.....')
        })
    }).catch((err) => {
        console.log('DataBase Connection Can not be Esatablished!!');
    })

