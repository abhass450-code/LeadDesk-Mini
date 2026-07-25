const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./Models/Admin");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    const existingAdmin = await Admin.findOne({
      email: "admin@digitalheroes.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("LeadDesk@123", 10);

    await Admin.create({
      email: "admin@digitalheroes.com",
      password: hashedPassword,
    });

    console.log("✅ Admin Created Successfully");
    process.exit();
  })
  .catch((err) => console.log(err));