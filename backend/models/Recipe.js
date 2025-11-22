const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
  date: Date
});

const IngredientSchema = new mongoose.Schema({
  name: String,
  amount: String
});

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  prepTime: String,
  cookTime: String,
  servings: Number,
  tags: [String],
  nutrition: Object,
  ingredients: [IngredientSchema],
  instructions: [String],
  reviews: [ReviewSchema],
  author: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
