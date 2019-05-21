const express = require('express');
const path = require('path');
const apiRouter = require('./api');

const app = express();

const logger = (req, res, next) => {
    console.log('new request with GET method ', req.url, ' ', Date.now());
    next();
};

app.use(logger);
app.get('*', logger);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('*', (req, res) => res.send('404: Page not found!!!'));

module.exports = app;
