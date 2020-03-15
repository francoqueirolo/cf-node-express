const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will GET the current dish');
})
.post((req, res, next) => {
    res.end('Will CREATE the current dish');
})
.put((req, res, next) => {
    //res.statusCode = 403;
    res.end('Will UPDATE the current dish');
})
.delete((req, res, next) => {
    res.end('Will DELETE the current dish');
});

module.exports = dishRouter;