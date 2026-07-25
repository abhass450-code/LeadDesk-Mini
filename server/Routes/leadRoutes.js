const express = require("express");
const router = express.Router();

const verifyToken = require("../Middleware/authMiddleware");

const {
  createLead,
  getAllLeads,
  updateStatus,
} = require("../Controllers/leadController");

// Public
router.post("/", createLead);

// Protected
router.get("/", verifyToken, getAllLeads);
router.put("/:id", verifyToken, updateStatus);

module.exports = router;