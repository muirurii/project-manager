const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    task: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Task",
        required: true,
    },
    replies: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Comment",
        default: []
    },
}, {
    timestamps: true
});


module.exports = mongoose.model("Comment", CommentSchema);