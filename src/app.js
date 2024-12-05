const express = require('express');

const app = express();

app.use("/hello", (req, res) => {
    res.send("Welcome to hello");
});

app.use('/test/123', (req, res) => {
    res.send('test 123');
})

app.use("/test", (req, res) => {
    res.send("Welcome to test");
});

app.use('/',(req, res) => {
    res.send("Hello Guys!! Welcome to tinder");
});

app.listen(8080, () => {
    console.log('Server is running successfully at port 8080....');
});