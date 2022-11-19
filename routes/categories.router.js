const express = require('express');
const router = express.Router();

const { getAllCategories, getCategoriesByID, createCategories, deleteCategoriesByID, updateCategoriesByID } = require('../controllers/categories.controller');

router.get('/', getAllCategories);
router.get('/:id', getCategoriesByID);
router.post('/', createCategories);
router.delete('/:id', deleteCategoriesByID);
router.patch('/:id', updateCategoriesByID);

module.exports = router;
