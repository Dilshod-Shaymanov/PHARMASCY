const express = require("express");
const {
  getDistrict,
  addDistrict,
  getDistrictById,
  deleteDistrictById,
  updateDistrictById,
} = require("../controllers/district");

const router = express.Router();

router.get("/", getDistrict);
router.get("/:id", getDistrictById);
router.post("/add", addDistrict);
router.delete("/:add", deleteDistrictById);
router.put("/:id", updateDistrictById);

module.exports = router;
