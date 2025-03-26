const express = require("express");
const Equipment = require("../Models/Equipment");

const router = express.Router();


router.post("/equipment", async (req, res) => {
  try {
    if (req.user.role !== "owner") {
      return res.status(403).json({ message: "Access denied. Only owners can create equipment." });
    }

    const equipment = new Equipment({ ...req.body, owner: req.user.userId });
    await equipment.save();

    res.status(201).json(equipment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong while creating the equipment." });
  }
});