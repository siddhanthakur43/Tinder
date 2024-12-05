const express = require('express');

const app = express();

app.get('/user', (req, res) => {
    res.send([{ firstName: 'Tanya', lastName: 'Dutt' }, { firstName: 'Anushka', lastName: 'Mishra' }])
});

app.post('/user', (req, res) => {
    res.send('Data Saved Successfully');
});

app.put('/user', (req, res) => {
    res.send('Data Updated Successfully via put');
});

app.patch('/user', (req, res) => {
    res.send('Data Updated Successfully via patch');
});

app.delete('/user', (req, res) => {
    res.send('Data Deleted Successfully');
});

app.use('/test/123', (req, res) => {
    res.send('test 123');
});

app.listen(8080, () => {
    console.log('Server is running successfully at port 8080....');
});