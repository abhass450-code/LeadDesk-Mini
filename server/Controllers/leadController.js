const Lead = require("../models/Lead");

// Create a new lead
const createLead = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    const newLead = await Lead.create({
      name,
      email,
      budget,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: newLead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all leads
const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateStatus = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createLead,
  getAllLeads,
  updateStatus,
};