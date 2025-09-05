const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true }, // e.g., Kathmandu, Pokhara
  image: { type: String, required: true }, // image URL
  description: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 0 },
  bestSeason: { type: String }, // e.g., Autumn, Spring
  activities: { type: [String] }, // e.g., ["Trekking", "Boating"]
}, { timestamps: true });

module.exports = mongoose.model("Attraction", attractionSchema);