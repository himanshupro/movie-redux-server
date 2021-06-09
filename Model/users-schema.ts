import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
		},
	},
	{ collection: "users" }
);

const userModel = mongoose.model("users", UsersSchema);

export default userModel;


