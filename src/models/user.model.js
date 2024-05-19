import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			unique: true,
			index: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			unique: true,
		},
		fullname: {
			type: String,
			required: true,
			trim: true,
			index: true,
		},
		avatar: {
			type: String, //cloudinary url
			required: true,
		},
		coverimage: {
			type: String, //cloudinary url
		},
		watchHistory: {
			type: Schema.Types.ObjectId,
			ref: "Video",
		},
		password: {
			type: String,
			requiered: [true, "Password is requiered"],
		},
		refreshToken: {
			type: String,
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (!this.password.isModified("password")) return next();

	this.password.bcrypt.hash(this.password, 8);
	next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessTokens = async function () {
	jwt.sign(
		{
			_id: this._id,
			email: this.email,
			username: this.username,
			fullname: this.fullname,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRT,
		}
	);
};
userSchema.methods.generateRefreshTokens = async function () {
	jwt.sign(
		{
			_id: this._id,
			email: this.email,
			username: this.username,
			fullname: this.fullname,
		},
		process.env.REFRESH_TOKEN_SECRET,
		{
			expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
		}
	);
};

export const User = mongoose.model("User", userSchema);
