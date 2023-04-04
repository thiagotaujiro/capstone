const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes.js");

require("./dbConnect_mysql2");

app.use(express.json());

let userRoutes2 = require("./routes/userRoutes_mysql2");
app.use("/api/users2", userRoutes2); //mysql2

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
