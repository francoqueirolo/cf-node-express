const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will GET the current promotion');
})
.post((req, res, next) => {
    res.end('Will CREATE the current promotion');
})
.put((req, res, next) => {
    res.end('Will UPDATE the current promotion');
})
.delete((req, res, next) => {
    res.end('Will DELETE the current promotion');
});

module.exports = promoRouter;