const mongoose = require('mongoose');
const { Schema } = mongoose;

const challengeSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  content: {
    type: [String],
  },
  kelas: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  requirement: {
    type: String,
    require: true,
  },
  categories: {
    type: [String],
  },
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
