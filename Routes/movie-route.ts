import express from "express";
import { addMovie, getMovie, getMovieById, searchByTitle } from "../Controller/movies-controller";

const movieRouter = express.Router();

movieRouter.get("/", getMovie)
           .post("/add", addMovie)
           .get("/searchid/:id", getMovieById)
           .get("/search/:movieTitle", searchByTitle)


export default movieRouter;
