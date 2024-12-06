const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth')

const app = express();

app.use('/admin', adminAuth);

app.get('/admin/getAllInfo', (req, res, next) => {
    res.send('All the information of admin');
});

app.get('/admin/deleteAdminInfo', (req, res) => {
    res.send('Admin data is deleted');
});

app.get('/user/login', (req, res) => {
    res.send('User login');
})

app.get('/user/userInfo', userAuth, (req, res) => {
    res.send("All the information of the User")
});

app.listen(8080, () => {
    console.log('Server is running on port 8080.....')
})