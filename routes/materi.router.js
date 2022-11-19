const express = require("express");
const router = express.Router();

const {
  getAllMateri,
  getMateriByID,
  addMateri,
  updateMateriByID,
  deleteMateriByID,
} = require("../controllers/materi.controller");

router.get("/", getAllMateri);
router.get("/:id", getMateriByID);
router.post("/", addMateri);
router.put("/:id", updateMateriByID);
router.delete("/:id", deleteMateriByID);

module.exports = router;