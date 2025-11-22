require('dotenv').config();
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

const recipes = [
  {
    title: "Paneer Butter Masala",
    description: "Soft paneer cubes cooked in a rich buttery tomato gravy."
  },
  {
    title: "Chocolate Brownie",
    description: "Soft and fudgy chocolate brownies baked to perfection."
  },
  {
    title: "Grilled Chicken Sandwich",
    description: "Juicy grilled chicken layered in toasted bread with veggies."
  },
  {
    title: "Chicken Biryani",
    description: "Aromatic basmati rice layered with spicy marinated chicken."
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Recipe.deleteMany(); 
    await Recipe.insertMany(recipes);

    console.log("Sample recipes inserted!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
