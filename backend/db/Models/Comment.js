const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    creatorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    taskId: {
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