const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getFavorites,
  addFavorite,
  removeFavorite,
} = require("../controllers/favoritesController");

const router = express.Router();

router.get("/", authMiddleware, getFavorites);
router.post("/add", authMiddleware, addFavorite);
router.delete("/remove/:countryCode", authMiddleware, removeFavorite);

module.exports = router;
