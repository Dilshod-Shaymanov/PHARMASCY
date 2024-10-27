const db = require("../config/db");

const getDorixona = (req, res) => {
  db.query("SELECT * FROM dorixona", (error, results) => {
    if (error) {
      console.log("Error selecting dorixona", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const addDorixona = (req, res) => {
  const { id, name, address, location, phone, email } = req.body;
  db.query(
    "INSERT INTO dorixona (id, name, address, location, phone, email) VALUES (?, ?, ?, ?, ?, ?)",
    [id, name, address, location, phone, email],
    (error, results) => {
      if (error) {
        console.log("Error adding new dorixona", error);
        return res.status(500).json({
          message: "Error adding new dorixona",
          error: "Internal Server Error",
        });
      }

      res.status(201).json({
        message: "Dorixona added successfully",
        dorixonaId: results.insertId,
      });
    }
  );
};

const getDorixonaById = (req, res) => {
  const dorixonaId = req.params.id;
  db.query(
    "SELECT * FROM dorixona WHERE id = ?",
    [dorixonaId],
    (error, results) => {
      if (error) {
        console.log("Error selecting dorixona By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Dorixona not found" });
      }

      res.json(results[0]);
    }
  );
};

const deleteDorixonaById = (req, res) => {
  const dorixonaId = req.params.id;
  db.query(
    "DELETE FROM dorixona WHERE id = ?",
    [dorixonaId],
    (error, results) => {
      if (error) {
        console.log("Error deleting dorixona By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({
        message: "Dorixona deleted successfully",
        dorixonaId: dorixonaId,
      });
    }
  );
};

const updateDorixonaById = (req, res) => {
  const dorixonaId = req.params.id;
  const { name, address, location, phone, email } = req.body;
  db.query(
    "UPDATE dorixona SET name =?, address =?, location =?, phone =?, email =? WHERE id =?",
    [name, address, location, phone, email, dorixonaId],
    (error, results) => {
      if (error) {
        console.log("Error updating dorixona By Id ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({
        message: "Dorixona updated successfully",
        dorixonaId: dorixonaId,
      });
    }
  );
};

const samarqanddagi_dorixonalar = (req, res) => {
  const dorixonaAdress = req.params.address;
  db.query(
    `SELECT * FROM dorixona WHERE address LIKE %${dorixonaAdress}%`,
    (error, results) => {
      if (error) {
        console.log("Xato:", error);
        return res.status(500).json({ error: "Serverda ichki xatolik" });
      }

      res.json(results);
    }
  );
};

module.exports = {
  getDorixona,
  addDorixona,
  getDorixonaById,
  deleteDorixonaById,
  updateDorixonaById,
  samarqanddagi_dorixonalar,
};
