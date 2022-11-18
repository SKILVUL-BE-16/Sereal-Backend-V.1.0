const Gallery = require('../models/gallery');
const mongoose = require('mongoose');
// get:
const getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find({}, '-__v');

    res.status(200).json(gallery);
  } catch (e) {
    console.log(e);
  }
};

// get:id
const getGalleryByID = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'No data for this gallery' });
    const gallery = await Gallery.findOne({ _id: id });
    res.status(200).json([gallery]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// post
const createGallery = (req, res) => {
  const data = req.body;

  const gallery = new Gallery(data);
  gallery.save(function (err) {
    if (err) {
      res.status(500).json({
        massage: err,
      });
    } else {
      res.status(201).json({
        message: 'Gallery has been created',
      });
    }
  });
};

// delete:id
const deleteGalleryByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: 'No data for this gallery' });
    }
    await Gallery.deleteOne({ _id: id });
    res.status(200).send({ massage: 'success delete gallery' });
  } catch (e) {
    res.status(404);
    res.send({ error: "gallery doesn't exist!", massage: e.massage });
  }
};

// update:id
const updateGalleryByID = async (req, res) => {
  const { id } = req.params;
  const { title, description, author, content, categories, status } = req.body;
  try {
    const gallery = await Gallery.findOne({ _id: id });

    if (title) gallery.title = title;

    if (author) gallery.author = author;

    if (description) gallery.description = description;

    if (content) {
      if (content.image) gallery.content.image = content.image;

      if (content.video) gallery.content.video = content.video;
    }

    for (let key in categories) {
      if (categories[key]) gallery.categories[key] = categories[key];
    }

    if (status != undefined && typeof status == 'boolean') status ? (gallery.status = true) : (gallery.status = false);

    await gallery.save();

    res.json({
      massage: 'success update gallery',
      data: gallery,
    });
  } catch (e) {
    res.status(500).send({
      message: 'server error',
      error: e.message,
    });
  }
};

module.exports = {
  getAllGallery,
  getGalleryByID,
  createGallery,
  deleteGalleryByID,
  updateGalleryByID,
};
