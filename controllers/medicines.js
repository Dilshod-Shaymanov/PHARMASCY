const db = require("../config/db");

const getMedicines = (req, res) => {
  db.query("SELECT * FROM Medicines", (error, results) => {
    if (error) {
      console.log("Error selecting Medicines", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const addMedicines = (req, res) => {
  const { id, name, manufacturer, price, expiry_date, info } = req.body;
  db.query(
    "INSERT INTO Medicines (id, name, manufacturer, price, expiry_date, info) VALUES (?, ?, ?, ?, ?, ?)",
    [id, name, manufacturer, price, expiry_date, info],
    (error, results) => {
      if (error) {
        console.log("Error adding new Medicines", error);
        return res.status(500).json({
          message: "Error adding new Medicines",
          error: "Internal Server Error",
        });
      }

      res.status(201).json({
        message: "Medicines added successfully",
        medicinesId: results.insertId,
      });
    }
  );
};

const getMedicinesById = (req, res) => {
  const medicinesId = req.params.id;
  db.query(
    "SELECT * FROM Medicines WHERE id = ?",
    [medicinesId],
    (error, results) => {
      if (error) {
        console.log("Error selecting Medicines By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Medicines not found" });
      }

      res.json(results[0]);
    }
  );
};

const deleteMedicinesById = (req, res) => {
  const medicinesId = req.params.id;
  db.query(
    "DELETE FROM Medicines WHERE id = ?",
    [medicinesId],
    (error, results) => {
      if (error) {
        console.log("Error deleting Medicines By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({
        message: "Medicines deleted successfully",
        medicinesId: results.insertId,
      });
    }
  );
};

const updateMedicinesById = (req, res) => {
  const medicinesId = req.params.id;
  const { name, manufacturer, price, expiry_date, info } = req.body;
  db.query(
    "UPDATE Medicines SET name =?, manufacturer =?, price =?, expiry_date =?, info =? WHERE id =?",
    [name, manufacturer, price, expiry_date, info, medicinesId],
    (error, results) => {
      if (error) {
        console.log("Error updating Medicines By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Medicines not found" });
      }

      res.json({
        message: "Medicines updated successfully",
        medicinesId: medicinesId,
      });
    }
  );
};

module.exports = {
  getMedicines,
  addMedicines,
  getMedicinesById,
  deleteMedicinesById,
  updateMedicinesById,
};
