const express = require('express');

const app = express();

app.use((req, res) => {
    res.send("Hello Guys!! Welcome to tinder");
});

app.use("/hello", (req, res) => {
    res.send("Hello hello hello");
});

app.use("/test", (req, res) => {
    res.send("Welcome to test");
});

app.listen(8080, () => {
    console.log('Server is running successfully at port 8080....');
});