const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  nama: String,
});

const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;
