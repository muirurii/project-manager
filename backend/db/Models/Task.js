const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    project: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    assignedUsers: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "User",
        default: []
    },
    status: {
        type: String,
        enum: ["complete", "in progress, late"],
        default: "inprogress"
    },
    estimatedHours: {
        type: Number,
        required: true
    },
    comments: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Comment",
        default: []
    },
}, {
    timestamps: true
});


module.exports = mongoose.model("Task", TaskSchema);