const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"], // Custom error message
        unique: true,  // Prevent duplicate emails
        lowercase: true,  // Convert to lowercase
        trim: true,  // Remove whitespace
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
