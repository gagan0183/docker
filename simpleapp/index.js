const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(1000, console.log('Listening on 1000'));