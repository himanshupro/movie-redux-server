import mongoose from "mongoose";

const Movie = new mongoose.Schema(
	{
        imdbID: {
            type:String,
            
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
	},
	{collection: "Movie"}
);

const movieModel = mongoose.model("Movie", Movie);

export default movieModel;


