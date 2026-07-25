const express = require("express");
const router = express.Router();

const {
  createLead,
  getAllLeads,
  updateStatus,
} = require("../controllers/leadController");

router.post("/", createLead);
router.get("/", getAllLeads);
router.put("/:id", updateStatus);

module.exports = router;