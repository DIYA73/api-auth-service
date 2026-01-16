require("dotenv").config(); // 👈 ADD THIS AT THE TOP

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`AuthImport
Auth service running on port ${PORT}`);
});
