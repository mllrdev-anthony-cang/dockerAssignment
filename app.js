require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 1234;
const MESSAGE = process.env.MESSAGE || '';

app.get('/', (req, res) => {
    res.send(`<h1>Hello World! ${MESSAGE}</h1>`)
})

app.listen(PORT, () => {
    console.info(`Server is running @ localhost:${PORT}`);
})