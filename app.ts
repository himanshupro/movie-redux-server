import express from "express";
import cors from "cors";
import connectionToDB from "./connection-to-db";
import dotenv from "dotenv";
import userRouter from "./Routes/users-route";
import movieRouter from "./Routes/movie-route"

dotenv.config();

const startServer = () => {
	const app = express();

	app.use(express.json());

	app.use(cors());

	connectionToDB()
		.then(() => {
			console.log("Connected to database");

			app.listen(process.env.PORT, () => {
				console.log(`Server Running at http://localhost:${process.env.PORT}`);
			});

			app.use("/api/users", userRouter);
			app.use("/api/movie", movieRouter);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};

startServer();
