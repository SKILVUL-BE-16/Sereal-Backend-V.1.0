const express = require('express');
const router = express.Router();

const { getAllGallery, getGalleryByID, createGallery, deleteGalleryByID, updateGalleryByID } = require('../controllers/gallery.controller');

router.get('/', getAllGallery);
router.get('/:id', getGalleryByID);
router.post('/', createGallery);
router.delete('/:id', deleteGalleryByID);
router.patch('/:id', updateGalleryByID);

module.exports = router;
