const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET all recipes
router.get('/', async (req, res) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 });
  res.json(recipes);
});

// GET recipe by id
router.get('/:id', async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: 'Not found' });
  res.json(recipe);
});

// POST add recipe
router.post('/', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.status(201).json(newRecipe);
});

// PUT update recipe
router.put('/:id', async (req, res) => {
  const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE recipe
router.delete('/:id', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// POST review for recipe
router.post('/:id/reviews', async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: 'Not found' });
  recipe.reviews.push(req.body);
  await recipe.save();
  res.status(201).json(recipe);
});

module.exports = router;
