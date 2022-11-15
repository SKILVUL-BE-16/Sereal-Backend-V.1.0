const mongoose = require('mongoose');
const { Schema } = mongoose

const todoSchema = new Schema({
  text: String,
  isComplete: Boolean,
  user: {
    type: mongoose.ObjectId,
    ref: "User"
  }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo