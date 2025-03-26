const mongoose = require("mongoose");

const EquipmentSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  imageUrl: String,
  available: { type: Boolean, default: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Equipment", EquipmentSchema);
