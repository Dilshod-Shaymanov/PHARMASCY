const express = require("express");

const router = express.Router();

const dorixonaRoute = require("./dorixona");
const districtRoute = require("./district");
const medicinesRoute = require("./medicines");
const medicinetypeRoute = require("./medicineType");

router.use("/dorixona", dorixonaRoute);
router.use("/district", districtRoute);
router.use("/medicines", medicinesRoute);
router.use("/medicinetype", medicinetypeRoute);

module.exports = router;
