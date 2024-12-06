const express = require('express');

const app = express();

app.get('/user', (req, res) => {
    try {
        throw new Error('abcdefghijklm');
        res.send('All User Data');
     } catch (e) {
        res.status(500).send('Something went wrong try catch!!!')
    }
})

//wild card error handling
app.use('/', (err, req, res, next) => {
    if (err) {
        res.status(500).send('Something Went wrong')
    }
});

app.listen(8080, () => {
    console.log('Server is running on 8080 for error handling....')
});