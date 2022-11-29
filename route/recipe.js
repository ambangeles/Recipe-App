const express = require("express");
const router = express.Router();
const Recipe = require("../model/Recipe");

//Add recipe
router.post("/add", async (req, res) => {
	const recipe = new Recipe(req.body);

	try {
		await recipe.save();
		res.send(recipe);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Get recipe
router.get("/get/:name", async (req, res) => {
	const recipes = await Recipe.find({ name: req.params.name });
	try {
		res.send(recipes);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
