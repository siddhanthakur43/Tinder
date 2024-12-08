const express = require('express');
const { connectDB } = require('./config/database')
const User = require('./models/user');

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    //creating a instance of the user model
    const user = new User(req.body);
    try {
    await user.save();
    res.send('User Added Successfully');
    } catch (e) {
        res.status(400).send('Something went wrong');
    }
    
});


connectDB()
    .then(() => {
        console.log('DataBase Connection Esatablished.....');
        app.listen(8080, () => {
            console.log('Server is running on port 8080.....')
        })
    }).catch((err) => {
        console.log('DataBase Connection Can not be Esatablished!!');
    })

