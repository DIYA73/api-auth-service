const express = require("express");
const authRoutes = require("./config/routes/auth.routes");
const protectedRoutes = require("./config/routes/protected.routes");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

module.exports = app;
