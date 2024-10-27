const db = require("../config/db");

const getMedicineType = (req, res) => {
  db.query("SELECT * FROM MedicineType", (error, results) => {
    if (error) {
      console.log("Error selecting MedicineType", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const addMedicineType = (req, res) => {
  const { id, name } = req.body;
  db.query(
    "INSERT INTO MedicineType (id, name) VALUES (?, ?)",
    [id, name],
    (error, results) => {
      if (error) {
        console.log("Error adding new MedicineType", error);
        return res.status(500).json({
          message: "Error adding new MedicineType",
          error: "Internal Server Error",
        });
      }
      res.status(201).json({
        message: "MedicineType added successfully",
        medicineTypeId: results.medicineTypeId,
      });
    }
  );
};

const getMedicineTypeById = (req, res) => {
  const medicineTypeId = req.params.id;
  db.query(
    "SELECT * FROM MedicineType WHERE id = ?",
    [medicineTypeId],
    (error, results) => {
      if (error) {
        console.log("Error selecting MedicineType By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "MedicineType not found" });
      }

      res.json(results[0]);
    }
  );
};

const deleteMedicineTypeById = (req, res) => {
  const medicineTypeId = req.params.id;
  db.query(
    "DELETE FROM MedicineType WHERE id = ?",
    [medicineTypeId],
    (error, results) => {
      if (error) {
        console.log("Error deleting MedicineType By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({
        message: "MedicineType deleted successfully",
        medicineTypeId: medicineTypeId,
      });
    }
  );
};

const updateMedicineTypeById = (req, res) => {
  const medicineTypeId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE MedicineType SET name =? WHERE id =?",
    [name, medicineTypeId],
    (error, results) => {
      if (error) {
        console.log("Error updating MedicineType By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({
        message: "MedicineType updated successfully",
        medicineTypeId: medicineTypeId,
      });
    }
  );
};

module.exports = {
  getMedicineType,
  addMedicineType,
  getMedicineTypeById,
  deleteMedicineTypeById,
  updateMedicineTypeById,
};
