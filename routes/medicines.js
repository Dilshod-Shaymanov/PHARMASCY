const express = require("express");
const {
  getMedicines,
  addMedicines,
  getMedicinesById,
  deleteMedicinesById,
  updateMedicinesById,
} = require("../controllers/medicines");

const router = express.Router();

router.get("/", getMedicines);
router.get("/:id", getMedicinesById);
router.post("/add", addMedicines);
router.delete("/:add", deleteMedicinesById);
router.put("/:id", updateMedicinesById);

module.exports = router;
