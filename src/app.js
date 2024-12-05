const express = require('express');

const app = express();

// app.get('/ab?c', (req, res) => {
//     res.send({ firstName: "Zoe", lastName: 'Thomas'});
// });

// app.get('/ab+c', (req, res) => {
//     res.send({ name: 'Siddhant', lastName: "Singh" });
// });

// app.get('/ab*cd', (req, res) => {
//     res.send({ name: 'Siddhant', lastName: "Singh" });
// });

// app.get(/a/, (req, res) => {
//     res.send('Hello Regex');
// })

// app.get(/.*fly$/, (req, res) => {
//     res.send('fly regex');
// })

// app.get('/user', (req, res) => {
//     console.log(req.query);
//     res.send('Hello User query');
// })

app.get('/user/:userId/:name/:password', (req, res) => {
    console.log(req.params);
    res.send('Hello user params')
})

app.listen(8080, () => {
    console.log('Server is running successfully at port 8080....');
});