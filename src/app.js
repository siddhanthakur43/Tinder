const express = require('express');

const app = express();

app.use('/user', [(req, res, next) => {
    console.log("Response 1")
    next();
},
    (req,res, next) => {
        res.send('2nd Response');
        console.log('2nd Response');
        next();
    }],
    (res, req, next) => {
        res.send('Response 3');
        console.log('3rd Response');
    }
)

app.listen(8080, () => {
    console.log('Server is running successfully at port 8080....');
});