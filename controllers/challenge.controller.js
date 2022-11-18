const Challenge = require('../models/challenge');
const mongoose = require('mongoose');
// get:
const getAllChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.find({}, '-__v');

    res.status(200).json(challenge);
  } catch (e) {
    console.log(e);
  }
};

// get:id
const getChallengeByID = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'No data for this challenge' });
    const challenge = await Challenge.findOne({ _id: id });
    res.status(200).json([challenge]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// post
const createChallenge = (req, res) => {
  const data = req.body;

  const challenge = new Challenge(data);
  challenge.save(function (err) {
    if (err) {
      res.status(500).json({
        massage: err,
      });
    } else {
      res.status(201).json({
        message: 'Challenge has been created',
      });
    }
  });
};

// delete:id
const deleteChallengeByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: 'No data for this challenge' });
    }
    await Challenge.deleteOne({ _id: id });
    res.status(200).send({ massage: 'success delete challenge' });
  } catch {
    res.status(404);
    res.send({ error: "Challenge doesn't exist!" });
  }
};

// update:id
const updateChallengeByID = async (req, res) => {
  const { id } = req.params;
  const { title, description, requirement, content, categories, status } = req.body;
  try {
    const challenge = await Challenge.findOne({ _id: id });

    if (title) challenge.title = title;

    if (description) challenge.description = description;

    if (requirement) challenge.requirement = requirement;

    if (content) {
      if (content.image) challenge.content.image = content.image;

      if (content.video) challenge.content.video = content.video;
    }

    for (let key in categories) {
      if (categories[key]) challenge.categories[key] = categories[key];
    }

    if (status != undefined && typeof status == 'boolean') status ? (challenge.status = true) : (challenge.status = false);

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
