const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
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
    picture: {
        type: String,
        default: "./img.jpg"
    },
    projects: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Project",
        default: [],
    },

}, {
    timestamps: true
});


module.exports = mongoose.model("User", UserSchema);