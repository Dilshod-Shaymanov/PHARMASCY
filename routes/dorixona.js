const express = require("express");
const {
  getDorixona,
  addDorixona,
  getDorixonaById,
  deleteDorixonaById,
  updateDorixonaById,
  samarqanddagi_dorixonalar,
} = require("../controllers/dorixona");

const router = express.Router();

router.get("/", getDorixona);
router.get("/:id", getDorixonaById);
router.get("/:adress", samarqanddagi_dorixonalar);
router.post("/add", addDorixona);
router.delete("/:add", deleteDorixonaById);
router.put("/:id", updateDorixonaById);

module.exports = router;
