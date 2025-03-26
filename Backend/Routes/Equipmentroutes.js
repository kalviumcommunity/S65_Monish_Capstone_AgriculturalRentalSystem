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

router.get("/", async (req, res) => {
  try {
    const equipment = await Equipment.find().populate("owner", "name email");
    if (!equipment.length) {
      return res.status(404).json({ message: "No equipment found." });
    }
    res.json(equipment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong while fetching the equipment." });
  }
});

// Get Equipment by ID
router.get("/:id", async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id).populate("owner", "name email");
    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found." });
    }
    res.json(equipment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong while fetching the equipment." });
  }
});


module.exports=router;