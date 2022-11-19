const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const materiRouter = require('./materi.router');
const verifyToken = require('../middleware/auth');
const challengeRouter = require('./challenge.router');
const challengeGallery = require('./gallery.router');
const authRouter = require('./auth.router');

router.use('/', authRouter);
router.use('/materi', materiRouter);
router.use('/challenge', challengeRouter);
router.use('/gallery', challengeGallery);
router.use('/user', verifyToken, userRouter);

module.exports = router;
