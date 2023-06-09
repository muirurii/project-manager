const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
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
    admins: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "User",
        default: []
    },
    members: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "User",
        default: []
    },
    status: {
        type: String,
        enum: ["complete", "inprogress", "late"],
        default: "inprogress"
    },
    estimatedHours: {
        type: Number,
        required: true,
    },
    tasks: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Task",
        default: []
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Project", ProjectSchema);