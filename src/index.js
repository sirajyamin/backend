// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
	path: "./.env",
});

connectDB()
	.then(() => {
		app.on("error", (error) => {
			console.log("MONGO_DB connection error", error);
		});
		app.listen(process.env.PORT || 8000),
			() => {
				console.log(`Listening on ${process.env.PORT}`);
			};
	})
	.catch((err) => {
		console.log("MONGO_DB connection error ", err);
	});

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
