'use strict';
const express = require('express');
// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
res.send('Hello DevOps Course - This Update is created with a GitHub Action! Incredible not? This is try 9...');
});
app.listen(PORT, HOST);
console.log(`Running on
http://${HOST}:${PORT}`)