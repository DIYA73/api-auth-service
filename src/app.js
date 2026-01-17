const express = require("express");
const app = express();

app.use(express.json());

// ✅ ROUTES (correct paths)
const authRoutes = require("./routes/auth.routes");
const protectedRoutes = require("./routes/protected.routes");
const adminRoutes = require("./routes/admin.routes");

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
