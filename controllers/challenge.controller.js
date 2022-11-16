const Challenge = require('../models/challenge');

// get:
const getAllChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.find({}, '-__v');

    res.status(200).json({
      massage: 'Success get all Challenge',
      data: challenge,
    });
  } catch (e) {
    console.log(e);
  }
};

// get:id
const getChallengeByID = async (req, res) => {
  const { id } = req.params;

  try {
    const challenge = await Challenge.findOne({ _id: id });
    res.status(200).json({
      data: challenge,
    });
  } catch {
    res.status(404);
    res.send({ error: "Challange doesn't exist!" });
  }
};

// post
const createChallenge = (req, res) => {
  const data = req.body;
  const challenge = new Challenge(data);
  challenge.save();

  res.status(200).json({
    message: 'Challenge has been created',
  });
};

// delete:id
const deleteChallengeByID = async (req, res) => {
  const { id } = req.params;
  try {
    await Challenge.deleteOne({ _id: id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Challenge doesn't exist!" });
  }
};

// update:id
const updateChallengeByID = async (req, res) => {
  const { id } = req.params;
  try {
    const challenge = await Challenge.findOne({ _id: id });

    if (req.body.title) {
      challenge.title = req.body.title;
    }

    if (req.body.description) {
      challenge.description = req.body.description;
    }

    for (let key in req.body.content) {
      if (req.body.content[key]) {
        challenge.content[key] = req.body.content[key];
      }
    }

    for (let key in req.body.categories) {
      if (req.body.categories[key]) {
        challenge.categories[key] = req.body.categories[key];
      }
    }

    if (req.body.requirement) {
      challenge.requirement = req.body.requirement;
    }
    await challenge.save();

    res.json({
      massage: 'success',
      data: challenge,
    });
  } catch (e) {
    res.status(500).send({
      message: 'server error',
      error: e.message,
    });
  }
};

module.exports = {
  getAllChallenge,
  getChallengeByID,
  createChallenge,
  deleteChallengeByID,
  updateChallengeByID,
};
