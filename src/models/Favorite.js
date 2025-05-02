const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  countryCode: { type: String, required: true },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
