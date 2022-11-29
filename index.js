const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const recipe = require("./route/recipe")

dotenv.config();

const PORT = 3000;
const URL = `mongodb+srv://ambangeles:${process.env.PASSWORD}@cluster0.9lkm6vf.mongodb.net/?retryWrites=true&w=majority`;
const CONNECTION_PARAMS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(URL, CONNECTION_PARAMS)
	.then(() => {
		console.log("Connected to the database ");
	})
	.catch((err) => {
		console.error(`Error connecting to the database. n${err}`);
	});

    
app.use(express.json());
app.use('/', recipe)

app.listen(PORT, () => {
	console.log("listening at PORT 3000!");
});
