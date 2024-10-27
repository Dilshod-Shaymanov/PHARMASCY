const express = require("express");
const {
  getMedicineType,
  addMedicineType,
  getMedicineTypeById,
  deleteMedicineTypeById,
  updateMedicineTypeById,
} = require("../controllers/medicinetype");

const router = express.Router();

router.get("/", getMedicineType);
router.get("/:id", getMedicineTypeById);
router.post("/add", addMedicineType);
router.delete("/:add", deleteMedicineTypeById);
router.put("/:id", updateMedicineTypeById);

module.exports = router;
