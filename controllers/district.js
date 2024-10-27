const db = require("../config/db");

const getDistrict = (req, res) => {
  db.query("SELECT * FROM District", (error, results) => {
    if (error) {
      console.log("Error selecting District", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const addDistrict = (req, res) => {
  const { id, name } = req.body;
  db.query(
    "INSERT INTO District (id, name) VALUES (?, ?)",
    [id, name],
    (error, results) => {
      if (error) {
        console.log("Error adding new District", error);
        return res.status(500).json({
          message: "Error adding new District",
          error: "Internal Server Error",
        });
      }

      res.status(201).json({
        message: "District added successfully",
        districtId: results.districtId,
      });
    }
  );
};

const getDistrictById = (req, res) => {
  const districtId = req.params.id;
  db.query(
    "SELECT * FROM District WHERE id = ?",
    [districtId],
    (error, results) => {
      if (error) {
        console.log("Error selecting District By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "District not found" });
      }

      res.json(results[0]);
    }
  );
};

const deleteDistrictById = (req, res) => {
  const districtId = req.params.id;
  db.query(
    "DELETE FROM District WHERE id = ?",
    [districtId],
    (error, results) => {
      if (error) {
        console.log("Error deleting District By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({
        message: "District deleted successfully",
        districtId: districtId,
      });
    }
  );
};

const updateDistrictById = (req, res) => {
  const districtId = req.params.id;
  const { id, name } = req.body;
  db.query(
    "UPDATE District SET id =?, name =?",
    [id, name],
    (error, results) => {
      if (error) {
        console.log("Error updating District By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({
        message: "District updated successfully",
        districtId: districtId,
      });
    }
  );
};

module.exports = {
  getDistrict,
  addDistrict,
  getDistrictById,
  deleteDistrictById,
  updateDistrictById,
};
