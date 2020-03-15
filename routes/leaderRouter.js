const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will GET the current leader');
})
.post((req, res, next) => {
    res.end('Will CREATE the current leader');
})
.put((req, res, next) => {
    res.end('Will UPDATE the current leader');
})
.delete((req, res, next) => {
    res.end('Will DELETE the current leader');
});

module.exports = leaderRouter;