const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3030;
// console.log(PORT);

// const mainRoute = require("./routes/index");
const mainRoute = require("./routes");

const app = express();
app.use(express.json());

app.use("/api", mainRoute);

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
