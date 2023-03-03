const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    projectId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    creatorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    assignedUsers: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "User",
        default: []
    },
    pictureURL: {
        type: String,
        default: ""
    },
    cloudinaryID: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        enum: ["complete", "incomplete, late"],
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