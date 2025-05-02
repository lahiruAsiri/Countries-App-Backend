const Favorite = require("../models/Favorite");

const getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;
    const favorites = await Favorite.find({ userId });
    res.json(favorites.map((fav) => fav.countryCode));
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const addFavorite = async (req, res) => {
  try {
    const { countryCode } = req.body;
    const userId = req.user.id;

    const existingFavorite = await Favorite.findOne({ userId, countryCode });
    if (existingFavorite) {
      return res.status(400).json({ error: "Country already favorited" });
    }

    const favorite = new Favorite({ userId, countryCode });
    await favorite.save();

    res.status(201).json({ countryCode });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const removeFavorite = async (req, res) => {
  try {
    const { countryCode } = req.params;
    const userId = req.user.id;

    await Favorite.deleteOne({ userId, countryCode });
    res.json({ message: "Favorite removed" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getFavorites, addFavorite, removeFavorite };
