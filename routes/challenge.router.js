const express = require('express');
const router = express.Router();

const { getAllChallenge, getChallengeByID, createChallenge, deleteChallengeByID, updateChallengeByID } = require('../controllers/challenge.controller');

router.get('/', getAllChallenge);
router.get('/:id', getChallengeByID);
router.post('/', createChallenge);
router.delete('/:id', deleteChallengeByID);
router.patch('/:id', updateChallengeByID);

module.exports = router;
