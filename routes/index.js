const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const todoRouter = require('./todo.router');
const verifyToken = require('../middleware/auth');
const challengeRouter = require('./challenge.router');

router.use('/user', userRouter);
router.use('/todo', verifyToken, todoRouter);
router.use('/challenge', challengeRouter);

module.exports = router;
