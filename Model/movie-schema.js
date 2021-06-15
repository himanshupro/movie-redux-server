"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Movie = new mongoose_1.default.Schema({
    imdbID: {
        type: String,
    },
    Title: {
        type: String,
    },
    imdbRating: {
        type: String,
    },
    Year: {
        type: String,
    },
    Poster: {
        type: String,
    },
}, { collection: "Movie" });
var movieModel = mongoose_1.default.model("Movie", Movie);
exports.default = movieModel;
