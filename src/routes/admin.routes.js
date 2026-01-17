const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const requireAdmin = require("../middleware/role.middleware");

router.get(
  "/dashboard",
  authMiddleware,
  requireAdmin,
  (req, res) => {
    res.json({
      message: "Welcome Admin 👑",
      admin: req.user
    });
  }
);

module.exports = router;
