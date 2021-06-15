"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var movies_controller_1 = require("../Controller/movies-controller");
var movieRouter = express_1.default.Router();
movieRouter.get("/", movies_controller_1.getMovie)
    .post("/add", movies_controller_1.addMovie)
    .get("/searchid/:id", movies_controller_1.getMovieById)
    .get("/search/:movieTitle", movies_controller_1.searchByTitle);
exports.default = movieRouter;
