// require("dotenv").config({ path: "./env" });
// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
	path: "./.env",
});

connectDB();

/*
import express from "express";
const app = express();
const port = process.env.PORT(async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
		app.on("Error", (error) => {
			console.log("Error", error);
		});
		app.listen(port, () => {
			console.log(`Listening on ${port}`);
		});
	} catch (error) {
		console.log("ERROR", error);
	}
})();
*/
